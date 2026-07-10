import pkg from "pg";
import dns from "dns";
import net from "net";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;
const dbUrlStr = process.env.DATABASE_URL;
console.log("DATABASE_URL present:", !!dbUrlStr);

// Test 1: Standard Connection
async function testStandard() {
  console.log("=== Testing Standard Connection ===");
  const pool = new Pool({
    connectionString: dbUrlStr,
    ssl: { rejectUnauthorized: false }
  });
  
  try {
    const client = await pool.connect();
    console.log("Standard connection: SUCCESS!");
    const res = await client.query("SELECT NOW()");
    console.log("Query Result:", res.rows[0]);
    client.release();
  } catch (err) {
    console.error("Standard connection: FAILED", err);
  } finally {
    await pool.end();
  }
}

// Test 2: Custom stream Connection (IPv4 forcing)
async function testCustomStream() {
  console.log("\n=== Testing Custom Stream Connection ===");
  const dbUrl = new URL(dbUrlStr);
  const dbHost = dbUrl.hostname;
  const dbPort = dbUrl.port || 5432;
  
  const poolConfig = {
    connectionString: dbUrlStr,
    ssl: { rejectUnauthorized: false },
    stream: (config) => {
      return net.connect({
        host: dbHost,
        port: dbPort,
        lookup: (hostname, options, callback) => {
          dns.lookup(hostname, { ...options, family: 4 }, callback);
        }
      });
    }
  };
  
  const pool = new Pool(poolConfig);
  try {
    const client = await pool.connect();
    console.log("Custom stream connection: SUCCESS!");
    const res = await client.query("SELECT NOW()");
    console.log("Query Result:", res.rows[0]);
    client.release();
  } catch (err) {
    console.error("Custom stream connection: FAILED", err);
  } finally {
    await pool.end();
  }
}

// Test 3: Set DNS result order to IPv4 first, then connect standard
async function testDnsOrder() {
  console.log("\n=== Testing DNS Result Order (ipv4first) ===");
  dns.setDefaultResultOrder('ipv4first');
  
  const pool = new Pool({
    connectionString: dbUrlStr,
    ssl: { rejectUnauthorized: false }
  });
  
  try {
    const client = await pool.connect();
    console.log("DNS ipv4first connection: SUCCESS!");
    const res = await client.query("SELECT NOW()");
    console.log("Query Result:", res.rows[0]);
    client.release();
  } catch (err) {
    console.error("DNS ipv4first connection: FAILED", err);
  } finally {
    await pool.end();
  }
}

async function run() {
  if (!dbUrlStr) {
    console.error("DATABASE_URL environment variable is missing.");
    return;
  }
  await testStandard();
  await testCustomStream();
  await testDnsOrder();
}

run();
