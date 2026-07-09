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

export const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, courts, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    // Map 'courts' from the frontend form to 'subject' in the database
    const dbSubject = courts || subject || null;

    const { rows } = await pool.query(
      `INSERT INTO inquiries (name, email, phone, subject, message)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name, email, phone || null, dbSubject, message]
    );

    return res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully.",
      inquiry: rows[0],
    });
  } catch (error) {
    console.error("Error creating inquiry:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit inquiry. Please try again later.",
    });
  }
};

export const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;

    const { rowCount } = await pool.query(
      "DELETE FROM inquiries WHERE id = $1 RETURNING *",
      [id]
    );

    if (rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Inquiry deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting inquiry:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete inquiry.",
    });
  }
};


