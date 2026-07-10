import pkg from "pg";
import dotenv from "dotenv";
import dns from "dns";
import net from "net";

dotenv.config();

const { Pool } = pkg;

const poolConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Enforce SSL connection for external Supabase DB
};

if (process.env.DATABASE_URL) {
  try {
    const dbUrl = new URL(process.env.DATABASE_URL);
    const dbHost = dbUrl.hostname;
    const dbPort = dbUrl.port || 5432;
    
    poolConfig.stream = (config) => {
      return net.connect({
        host: dbHost,
        port: dbPort,
        lookup: (hostname, options, callback) => {
          dns.lookup(hostname, { ...options, family: 4 }, callback); // Force IPv4 to prevent ENETUNREACH on Render
        }
      });
    };
  } catch (e) {
    console.error("Failed to parse DATABASE_URL for custom stream lookup:", e);
  }
}

const pool = new Pool(poolConfig);

export default pool;
