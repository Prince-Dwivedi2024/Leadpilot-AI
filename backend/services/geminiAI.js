import { GoogleGenerativeAI } from "@google/generative-ai";
import { geminiLeadPrompt } from "../utils/prompts.js";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

function safeParseJSON(text) {
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      try {
        return JSON.parse(match[0]);
      } catch {}
    }

    return {
      lead_score: 50,
      intent: "Medium",
      persona: "Career Switcher",
      next_action: "Email Nurture",
      reasoning: "Fallback due to malformed AI response"
    };
  }
}

export async function qualifyLead(promptData) {
  if (!promptData) {
    throw new Error("Request body is empty");
  }

  const model = genAI.getGenerativeModel({
    model: "models/gemini-1.0-pro"
  });

  const prompt = geminiLeadPrompt(promptData);
  const result = await model.generateContent(prompt);

  const rawText = result?.response?.text?.() || "";

  console.log("🧠 Gemini raw response:\n", rawText);

  return safeParseJSON(rawText);
}
