require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');
const assistRoutes = require('./routes/assist');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ai-assistant', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err.message));

app.use('/api/auth', authRoutes);
app.use('/api/assist', assistRoutes);

app.get('/', (req, res) => res.send('AI Assistant backend running'));

router.post('/contact', async (req, res) => {
  try {
    const { email, message } = req.body;
    if (!email || !message) return res.status(400).json({ message: 'Missing fields' });
    const contactD = new User({ email, message });
    await contactD.save();
  } catch (err) {
    console.error(err); res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => console.log('Server listening on port', PORT));
