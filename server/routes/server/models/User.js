const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  middleName: String,
  lastName: String,
  age: Number,
  personalNumber: String,
  profileImage: String,
  history: [String]
});

module.exports = mongoose.model('User', userSchema);
