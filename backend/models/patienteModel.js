const mongoose = require('mongoose');
const { Schema } = mongoose;

const pacienteSchema = new Schema({
    name: String,
    surname: String,
    dni: String,
    street: String,
    number: String,
    floor: String,
    zipCode: String,
    location: String,
    state: String,
    isNn: Boolean,
    clinicHistory: String,
    sympthoms: Array,
    hasExtraSympthoms: Boolean,
    dataExtraSympthoms: String,
    dataNN: String,
    confirmedDate: String,
    entryDate: String,
    outDate: Date,
    turnState: String,
    born: String
});

module.exports  = mongoose.model('Patient', pacienteSchema, 'Patientes'); 
