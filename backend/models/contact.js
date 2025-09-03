const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  message: { type: String },
  
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', ContactSchema);