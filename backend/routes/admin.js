import express from "express";
import { addQuestion,getAllQuestions } from "../controllers/adminController.js";
import { authMiddleware, verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add-question", authMiddleware, verifyAdmin, addQuestion);
router.get("/questions",getAllQuestions);

export default router;