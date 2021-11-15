const mongoose = require('mongoose');
require('./models/usersModel');
require('./models/patienteModel')
const connection = "mongodb+srv://sgp:interfaces@cluster0.javrm.mongodb.net/sgp?retryWrites=true&w=majority";
mongoose.connect(connection)
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));