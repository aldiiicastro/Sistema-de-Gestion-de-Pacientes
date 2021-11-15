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

mongoose.model('User', userSchema, 'Users'); 