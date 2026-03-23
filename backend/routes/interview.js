import express from "express";
import {
  getQuestions,
  addQuestion,
  submitInterview
} from "../controllers/interviewController.js";

import { verifyToken as authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();


// ===============================
// ROUTES
// ===============================
router.get("/questions", getQuestions);

router.post("/add-question", authMiddleware, addQuestion);

router.post("/submit", authMiddleware, submitInterview);


export default router;
