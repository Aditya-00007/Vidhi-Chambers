import pkg from "pg";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Enforce SSL connection for external Supabase DB
  lookup: (hostname, options, callback) => {
    dns.lookup(hostname, { ...options, family: 4 }, callback); // Force IPv4 to prevent ENETUNREACH on Render
  },
});

export default pool;
