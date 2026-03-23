import express from "express";
import { submitInterview,getUserResults } from "../controllers/resultController.js";

const router = express.Router();

router.post("/submit",submitInterview);
router.get("/:userId",getUserResults);

export default router;