const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
    maxlength: 280,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model('Register', RegisterSchema);
