import express from "express";
import { getAllInquiries, createInquiry, deleteInquiry } from "../controller/allinquiries.js";
import { authenticateAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authenticateAdmin, getAllInquiries);
router.post("/", createInquiry);
router.delete("/:id", authenticateAdmin, deleteInquiry);



export default router;
