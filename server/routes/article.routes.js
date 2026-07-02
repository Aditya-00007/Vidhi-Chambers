import express from "express";
import {
  getAllArticles,
  getArticleBySlug,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../controller/article.controller.js";
import { authenticateAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public routes
router.get("/", getAllArticles);
router.get("/:slug", getArticleBySlug);

// Admin-only protected routes
router.post("/", authenticateAdmin, createArticle);
router.put("/:id", authenticateAdmin, updateArticle);
router.delete("/:id", authenticateAdmin, deleteArticle);

export default router;
