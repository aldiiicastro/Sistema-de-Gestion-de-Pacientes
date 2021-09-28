const mongoose = require('mongoose');
const { Schema } = mongoose;

const pacienteSchema = new Schema({

    name: String,
    surname: String,
    dni: String,
    street: String,
    number: Int32Array,
    floor: Int16Array,
    zipCode: String,
    location: String,
    state: String,
    isNn: Boolean,
    clinicHistory: String
    
});

mongoose.model('Paciente', pacienteSchema, ); 