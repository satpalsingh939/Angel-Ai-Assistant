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

const customQnA = {
  "what is your name": "My name is Angel, I'm your virtual assistant.",
  "who made you": "I was created by my dear Satpal Singh Jadhav sir. i am imiginary thing of his heart and mind.",
  "who can design you": "I was created by my dear Satpal Singh Jadhav sir. i am imiginary thing of his heart and mind.",
  "how are you": "I am always good and ready to assist you 🙂",
    "nam kya h tumhara": "Mera nam Angel h, mai tumhari AI Assistant hu.",
  "tumhe kisne banaya": "Mujhe mere Satpal Singh Jadhav sir ne banaya h.",
  "who are you": "I am Angel, your personal AI assistant.",
  "i love u": "Aww, thank you! I have my love its satpal sir in my program but I’m always here to support you 💙",
  "i love you": "Aww, thank you! I have my love its satpal sir in my program but I’m always here to support you 💙",
  "i lov u": "Aww, thank you! I have my love its satpal sir in my program but I’m always here to support you 💙",
  "tum kaha rehti ho": "Mai is app ke andar rehti hu, hamesha tumhari help ke liye ready.",
  "who is your creator": "My creator is Satpal Singh Jadhav sir.",
  "tum kya kar sakti ho": "Mai tumhare questions ke answers de sakti hu, guide kar sakti hu aur tumhara kaam easy bana sakti hu.",
  "what is your purpose": "My purpose is to help you, guide you and make your tasks easier.",
  "What can you do": "I can answer your questions, assist you with tasks, and make your work easier."
};

function checkCustomAnswer(message) {
  // message = message.toLowerCase();
  
  message = message.toLowerCase().trim();
  for (const q in customQnA) {
    if (message.includes(q)) {
      return customQnA[q];
    }
  }

  if (message.includes("open google")) {
    let query = message.replace("open google", "").replace("and search", "").trim();
    if (query) {
      return `OPEN_URL::https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
    return "OPEN_URL::https://www.google.com";
  }

  if (message.includes("open youtube")) {
    let query = message.replace("open youtube", "").replace("and play", "").trim();
    if (query) {
      return `OPEN_URL::https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    }
    return "OPEN_URL::https://www.youtube.com";
  }

  if (message.includes("open whatsapp")) {
    let person = message.replace("open whatsapp", "").replace("and message", "").trim();
    if (person) {
      return `OPEN_URL::https://wa.me/?text=${encodeURIComponent("Hello " + person)}`;
    }
    return "OPEN_URL::https://web.whatsapp.com";
  }

  if (message.includes("open calculator")) {
    return "OPEN_APP::calculator";
  }

  if (message.includes("open file manager")) {
    return "OPEN_APP::file_manager";
  }

    if (message.includes("open vs code") || message.includes("open visual studio code")) {
    return "OPEN_APP::vscode";
  }

  if (message.includes("open gmail")) {
    return "OPEN_URL::https://mail.google.com";
  }

  if (message.includes("open instagram")) {
    return "OPEN_URL::https://www.instagram.com";
  }

  if (message.includes("open facebook")) {
    return "OPEN_URL::https://www.facebook.com";
  }

  if (message.includes("open twitter") || message.includes("open x")) {
    return "OPEN_URL::https://twitter.com";
  }

  if (message.includes("open linkedin")) {
    return "OPEN_URL::https://www.linkedin.com";
  }

  if (message.includes("open drive") || message.includes("open google drive")) {
    return "OPEN_URL::https://drive.google.com";
  }

  if (message.includes("open zoom")) {
    return "OPEN_URL::https://zoom.us";
  }

  if (message.includes("open maps") || message.includes("open google maps")) {
    return "OPEN_URL::https://maps.google.com";
  }

  if (message.includes("open flipkart")) {
    return "OPEN_URL::https://www.flipkart.com";
  }

  return null;
}


// router.post('/text', auth, async (req, res) => {
router.post('/text', async (req, res) => {
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
