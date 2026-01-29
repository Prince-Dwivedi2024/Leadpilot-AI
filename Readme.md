🚀 LeadPilot AI

LeadPilot AI is an AI-powered lead qualification and conversion decisioning tool designed for growth teams.
It uses Google Gemini (LLM) to evaluate inbound leads, predict conversion intent, and recommend the next best action — all in real time.

This project is built with a builder + product mindset: fast iteration, minimal dependencies, and AI as a core decision layer.

✨ Key Features

🧠 AI-Powered Lead Qualification
Automatically scores leads (0–100), detects intent, classifies persona, and suggests next action.

📈 Growth-Focused Decisioning
Designed for conversion workflows: call now, WhatsApp follow-up, nurture, or drop.

⚡ Gemini LLM Integration (Free Tier)
Uses Google Gemini for cost-effective AI reasoning.

🛡 Safe JSON Parsing
Guards against malformed LLM responses (production-ready pattern).

🔌 Clean Frontend–Backend Separation
Simple HTML frontend + Express backend.

🧠 How It Works (High Level)

User enters lead details (name, background, problem, urgency)

Frontend sends data to backend via REST API

Backend sends a structured prompt to Gemini

Gemini returns a JSON-based evaluation

Backend safely parses and returns the result

Frontend displays the decision output

🧱 Tech Stack
Backend

Node.js

Express

Google Gemini API (@google/generative-ai)

dotenv

Frontend

HTML

CSS

Vanilla JavaScript

📁 Project Structure
leadpilot-ai/
│
├── backend/
│   ├── server.js                # Express server
│   ├── routes/
│   │   └── qualifyLead.js       # API route
│   ├── services/
│   │   └── geminiAI.js          # Gemini LLM integration
│   ├── utils/
│   │   └── prompts.js           # Gemini-optimized prompt
│   ├── .env                     # Environment variables
│   └── package.json
│
├── frontend/
│   ├── index.html               # UI
│   ├── app.js                   # Frontend logic
│   └── styles.css               # Styling
│
├── README.md
└── .gitignore

⚙️ Setup & Installation
1️⃣ Clone the repository
git clone https://github.com/your-username/leadpilot-ai.git
cd leadpilot-ai

2️⃣ Install backend dependencies
cd backend
npm install

3️⃣ Configure environment variables

Create a .env file inside backend/:

GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000


⚠️ Make sure the API key has Generative Language API enabled in Google AI Studio.

4️⃣ Start the backend server
node server.js


You should see:

🚀 Server running on port 5000

5️⃣ Run the frontend

Simply open:

frontend/index.html


in your browser.

🔗 API Reference
POST /api/qualify-lead

Request Body

{
  "name": "Rahul",
  "role": "Software Engineer",
  "problem": "Wants to switch job in 2 months",
  "urgency": 5
}


Response

{
  "lead_score": 82,
  "intent": "High",
  "persona": "Working Professional",
  "next_action": "Call Immediately",
  "reasoning": "Strong urgency with clear career switch intent"
}

🧪 Error Handling

Handles malformed AI responses safely

Returns fallback decisions if parsing fails

Logs raw LLM output for debugging

This mirrors real-world production practices when working with LLMs.

🎯 Why This Project Matters

This project demonstrates:

AI-native product thinking

End-to-end ownership (UI → API → AI → Output)

Cost-aware LLM usage

Growth & conversion mindset

Clean, scalable architecture

It is intentionally optimized for speed, clarity, and impact, not overengineering.

🧠 Future Improvements

Prompt A/B testing

Multiple AI provider support

Persistent lead storage (DB)

Dashboard & analytics

Authentication & role-based access

📌 One-Line Summary (Resume Ready)

Built an AI-powered lead qualification system using LLMs to score intent, classify personas, and recommend conversion actions in real time.

🧑‍💻 Author

Prince Dwivedi
Aspiring Product / Growth / AI Engineer