const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 10,
    max: 255,
  
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
   
  },
});

module.exports = mongoose.model('User', userSchema);