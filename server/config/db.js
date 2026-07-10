import pkg from "pg";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config();

// Force IPv4 first to prevent ENETUNREACH or ECANCELED resolution errors on environments like Render
dns.setDefaultResultOrder("ipv4first");

const { Pool } = pkg;

const poolConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Enforce SSL connection for external Supabase DB
};

const pool = new Pool(poolConfig);

export default pool;
