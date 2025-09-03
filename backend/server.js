require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');
const assistRoutes = require('./routes/assist');
const Contact = require('./models/contact.js');

// app.use(cors());

app.use(cors({
  origin: "angel-ai-assistant-1.vercel.app", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err.message));

app.use('/api/auth', authRoutes);
app.use('/api/assist', assistRoutes);

app.get('/', (req, res) => res.send('AI Assistant backend running'));

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.json({ message: ` ${name} successfully send your message to developer!` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => console.log('Server listening on port', PORT));
