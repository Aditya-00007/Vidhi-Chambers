import pool from "../config/db.js";

export const getAllInquiries = async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT *
      FROM inquiries
      ORDER BY created_at DESC
    `);

    return res.status(200).json({
      success: true,
      inquiries: rows,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch inquiries.",
    });
  }
};
