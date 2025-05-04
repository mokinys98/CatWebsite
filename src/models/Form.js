const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  vardas:  { type: String, required: true },
  email:   { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
}, {
  collection: 'Forma'
});

module.exports = mongoose.model('Form', formSchema);
