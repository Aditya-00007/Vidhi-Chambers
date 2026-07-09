import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import inquiryRoutes from "./routes/inquiry.routes.js";
import articleRoutes from "./routes/article.routes.js";
import pool from "./config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static uploads
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/admin", authRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/articles", articleRoutes);

app.get("/health", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.status(200).json({
      status: "OK",
      database: "Connected",
      timestamp: result.rows[0].now,
      env: {
        NODE_ENV: process.env.NODE_ENV || "not set",
        hasDatabaseUrl: !!process.env.DATABASE_URL,
        databaseUrlLength: process.env.DATABASE_URL ? process.env.DATABASE_URL.length : 0
      }
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      database: "Connection Failed",
      error: err.message,
      env: {
        NODE_ENV: process.env.NODE_ENV || "not set",
        hasDatabaseUrl: !!process.env.DATABASE_URL,
        databaseUrlLength: process.env.DATABASE_URL ? process.env.DATABASE_URL.length : 0
      }
    });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
