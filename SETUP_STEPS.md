## Quick setup (step-by-step)

1. Unzip the project and open terminal.
2. Start the backend
   - cd backend
   - npm install
   - copy `.env.example` to `.env` and fill values: MONGO_URI, JWT_SECRET, (optional) OPENAI_API_KEY
   - npm run dev   (or `npm start` if you don't have nodemon)
3. Start the frontend
   - cd ../frontend
   - npm install
   - npm run dev
   - open http://localhost:5173
4. Register a new user, login, then use the Text Assistant or Voice Assistant pages.
   - Voice assistant requires a browser that supports Web Speech API (Chrome/Edge).

Notes:
- If you set OPENAI_API_KEY in backend `.env`, intelligent responses will be fetched from OpenAI's chat completion endpoint.
- If OPENAI_API_KEY is omitted, the assistant falls back to a simple rule-based responder (demo-only).
