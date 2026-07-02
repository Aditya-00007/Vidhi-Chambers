import pool from "../config/db.js";

// Helper to generate a slug from the title
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// GET all articles
export const getAllArticles = async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM articles ORDER BY created_at DESC"
    );
    return res.status(200).json({ success: true, articles: rows });
  } catch (error) {
    console.error("Fetch articles error:", error);
    return res.status(500).json({ success: false, message: "Failed to fetch articles." });
  }
};

// GET single article by slug
export const getArticleBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const { rows } = await pool.query(
      "SELECT * FROM articles WHERE slug = $1",
      [slug]
    );

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: "Article not found." });
    }

    return res.status(200).json({ success: true, article: rows[0] });
  } catch (error) {
    console.error("Fetch article by slug error:", error);
    return res.status(500).json({ success: false, message: "Failed to fetch article." });
  }
};

// POST create article
export const createArticle = async (req, res) => {
  try {
    const { title, excerpt, content, category, read_time, cover_image, author } = req.body;

    if (!title || !content) {
      return res.status(400).json({ success: false, message: "Title and Content are required." });
    }

    const slug = generateSlug(title);

    // Check slug uniqueness
    const slugCheck = await pool.query("SELECT id FROM articles WHERE slug = $1", [slug]);
    if (slugCheck.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "An article with a similar title already exists. Please choose a different title."
      });
    }

    const { rows } = await pool.query(
      `INSERT INTO articles (title, slug, excerpt, content, category, read_time, cover_image, author)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [
        title,
        slug,
        excerpt || "",
        content,
        category || "General",
        read_time || "5 min read",
        cover_image || "",
        author || "Vidhi Chambers"
      ]
    );

    return res.status(201).json({ success: true, message: "Article created successfully.", article: rows[0] });
  } catch (error) {
    console.error("Create article error:", error);
    return res.status(500).json({ success: false, message: "Failed to create article." });
  }
};

// PUT update article
export const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, excerpt, content, category, read_time, cover_image, author } = req.body;

    if (!title || !content) {
      return res.status(400).json({ success: false, message: "Title and Content are required." });
    }

    // Check if article exists
    const articleCheck = await pool.query("SELECT id, slug FROM articles WHERE id = $1", [id]);
    if (articleCheck.rows.length === 0) {
      return res.status(404).json({ success: false, message: "Article not found." });
    }

    const slug = generateSlug(title);

    // Check slug uniqueness if slug has changed
    if (slug !== articleCheck.rows[0].slug) {
      const slugCheck = await pool.query("SELECT id FROM articles WHERE slug = $1 AND id != $2", [slug, id]);
      if (slugCheck.rows.length > 0) {
        return res.status(400).json({
          success: false,
          message: "An article with a similar title already exists. Please choose a different title."
        });
      }
    }

    const { rows } = await pool.query(
      `UPDATE articles
       SET title = $1, slug = $2, excerpt = $3, content = $4, category = $5, read_time = $6, cover_image = $7, author = $8, updated_at = CURRENT_TIMESTAMP
       WHERE id = $9
       RETURNING *`,
      [
        title,
        slug,
        excerpt,
        content,
        category,
        read_time,
        cover_image,
        author || "Vidhi Chambers",
        id
      ]
    );

    return res.status(200).json({ success: true, message: "Article updated successfully.", article: rows[0] });
  } catch (error) {
    console.error("Update article error:", error);
    return res.status(500).json({ success: false, message: "Failed to update article." });
  }
};

// DELETE article
export const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;

    const { rowCount } = await pool.query("DELETE FROM articles WHERE id = $1", [id]);

    if (rowCount === 0) {
      return res.status(404).json({ success: false, message: "Article not found." });
    }

    return res.status(200).json({ success: true, message: "Article deleted successfully." });
  } catch (error) {
    console.error("Delete article error:", error);
    return res.status(500).json({ success: false, message: "Failed to delete article." });
  }
};
