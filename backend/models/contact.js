const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  message: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Contact', ContactSchema);