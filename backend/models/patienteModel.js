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
    entryDate: Date,
    outDate: Date,
});

mongoose.model('Patient', pacienteSchema, 'Patientes'); 