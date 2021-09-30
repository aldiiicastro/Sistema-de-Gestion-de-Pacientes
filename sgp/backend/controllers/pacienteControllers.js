const { response, json } = require('express');
const mongoose = require('mongoose');
const Patient = mongoose.model('Patient')

exports.patient_register = async function (req, res) {
    try {
        const body = req.body
        const date = new Date()
        const patient = await Patient.create({name: body.nombre, surname: body.apellido, dni: body.dni, street: body.calle, number: body.numero,
                                                floor: body.piso, zipCode: body.codigo_postal, location: body.localidad, state: body.provincia,
                                                isNn: body.nn, clinicHistory: '', sympthoms: body.sintomas, hasExtraSympthoms: body.bSintomasExtras,
                                                dataExtraSympthoms: body.sintomasExtras, dataNN: body.infoNN, entryDate: date})

        res.status(200).json({
            response: 'Pacientes ingresado con Exito!'
        })
    } catch (error) {
        res.status(404).json(error)
    }
}