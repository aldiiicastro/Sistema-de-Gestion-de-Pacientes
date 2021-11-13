const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  receptionist: Boolean,
  doctor: Boolean,
  firstLog: Boolean
});

module.exports  = mongoose.model('User', userSchema, 'Users'); 
