const mongoose = require('mongoose');
require('./models/usersModel');
require('./models/patienteModel')
const databaseName='sgp';
const password='interfaces'
const MONGO_URI = `mongodb+srv://${databaseName}:${password}@cluster0.javrm.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
