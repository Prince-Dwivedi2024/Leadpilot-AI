import express from "express";
import { qualifyLead } from "../services/geminiAI.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const result = await qualifyLead(req.body);
    res.json(result);
  } catch (error) {
    console.error("❌ Backend error:", error);
    res.status(500).json({
      error: "Lead qualification failed",
      details: error.message
    });
  }
});

export default router;
