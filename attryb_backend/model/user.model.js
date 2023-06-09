// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role:{type: String, required: true,enum: ['dealer', 'user'] }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
