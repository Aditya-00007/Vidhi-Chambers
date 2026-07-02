import express from "express";
import { getAllInquiries } from "../controller/allinquiries.js";
import { authenticateAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authenticateAdmin, getAllInquiries);

export default router;
