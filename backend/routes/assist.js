// const express = require('express');
// const router = express.Router();
// const fetch = require('node-fetch');
// const auth = require('../middleware/auth');

// // ✅ Gemini API URL (replace with your key in .env later)
// const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + process.env.GEMINI_API_KEY;

// // 🔹 Text Assistant Endpoint
// router.post('/text', auth, async (req, res) => {
//   try {
//     const { message } = req.body;
//     if (!message) return res.status(400).json({ message: 'No message provided' });

//     const response = await fetch(GEMINI_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         contents: [{ parts: [{ text: message }] }]
//       })
//     });

//     const data = await response.json();
//     const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No reply from Gemini";

//     res.json({ reply });
//   } catch (err) {
//     console.error("Gemini error:", err);
//     res.status(500).json({ message: "Assistant error", error: err.message });
//   }
// });

// // 🔹 Voice Assistant Endpoint (same logic)
// router.post('/voice', auth, async (req, res) => {
//   try {
//     const { message } = req.body;
//     if (!message) return res.status(400).json({ message: 'No message provided' });

//     const response = await fetch(GEMINI_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         contents: [{ parts: [{ text: message }] }]
//       })
//     });

//     const data = await response.json();
//     const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No reply from Gemini";

//     res.json({ reply });
//   } catch (err) {
//     console.error("Gemini error:", err);
//     res.status(500).json({ message: "Assistant error", error: err.message });
//   }
// });

// module.exports = router;

// -------------------------------------

const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const auth = require('../middleware/auth');

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" +
  process.env.GEMINI_API_KEY;

// 🔹 Custom QnA Database (add your questions/answers here)
const customQnA = {
  // "hello": "Hi! How can I help you today?",
  "what is your name": "My name is Angel, I'm your virtual assistant.",
  "who made you": "I was created by Satpal Singh Jadhav using React, Node.js and MongoDB.",
  "how are you": "I am always good and ready to assist you 🙂"
};

// ✅ Function to check custom answers
function checkCustomAnswer(message) {
  const lowerMsg = message.toLowerCase().trim();
  for (const q in customQnA) {
    if (lowerMsg.includes(q)) {
      return customQnA[q];
    }
  }
  return null;
}

// 🔹 Text Assistant Endpoint
// router.post('/text', auth, async (req, res) => {
router.post('/text', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ message: 'No message provided' });

    // 1. Check predefined QnA
    const customReply = checkCustomAnswer(message);
    if (customReply) {
      return res.json({ reply: customReply });
    }

    // 2. If not found → call Gemini API
    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }]
      })
    });

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "No reply from Gemini";

    res.json({ reply });
  } catch (err) {
    console.error("Gemini error:", err);
    res.status(500).json({ message: "Assistant error", error: err.message });
  }
});

// 🔹 Voice Assistant Endpoint (same logic)
// router.post('/voice', auth, async (req, res) => {
  router.post('/voice', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ message: 'No message provided' });

    const customReply = checkCustomAnswer(message);
    if (customReply) {
      return res.json({ reply: customReply });
    }

    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }]
      })
    });

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "No reply from Gemini";

    res.json({ reply });
  } catch (err) {
    console.error("Gemini error:", err);
    res.status(500).json({ message: "Assistant error", error: err.message });
  }
});

module.exports = router;
