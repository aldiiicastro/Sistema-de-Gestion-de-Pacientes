const mongoose = require('mongoose');
require('./models/usersModel');
require('./models/patienteModel')
const databaseName='sgp';
const password='interfaces'
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
