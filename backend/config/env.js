import dotenv from "dotenv";
dotenv.config();

export const env = {
  USE_AI: process.env.USE_AI === "true",
  AI_PROVIDER: process.env.AI_PROVIDER || "mock",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY
};
