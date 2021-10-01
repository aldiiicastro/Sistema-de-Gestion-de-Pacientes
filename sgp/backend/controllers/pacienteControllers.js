const { response, json } = require('express');
const mongoose = require('mongoose');
const Patient = mongoose.model('Patient')

exports.patient_register = async function (req, res) {
    try {
        const body = req.body
        const date = new Date()

        if(body.nn) {
            const patientNn = await Patient.create({name: '', surname: '', dni: 0, street: '', number: 0,
                floor: 0, zipCode: '', location: '', state: body.provincia,
                isNn: body.nn, clinicHistory: '', sympthoms: body.sintomas, hasExtraSympthoms: body.bSintomasExtras,
                dataExtraSympthoms: body.sintomasExtras, dataNN: body.infoNN, entryDate: date})

            return res.status(201).json({
                response: 'Paciente NN ingresado con exito!'
            })
        } else if(!body.nn && (body.nombre.trim() === '' || body.apellido.trim() === '' || body.dni.trim() === '')) {
            return res.status(400).json({
                response: 'Error al Ingresar, paciente sin datos personales'
            })
        }

        const patient = await Patient.create({name: body.nombre, surname: body.apellido, dni: body.dni, street: body.calle, number: body.numero,
                                                floor: body.piso, zipCode: body.codigo_postal, location: body.localidad, state: body.provincia,
                                                isNn: body.nn, clinicHistory: '', sympthoms: body.sintomas, hasExtraSympthoms: body.bSintomasExtras,
                                                dataExtraSympthoms: body.sintomasExtras, dataNN: body.infoNN, entryDate: date})
                                                
        res.status(201).json({
            response: `Paciente ${patient.name} ${patient.surname} ingresado con Exito!`
        })
    } catch (error) {
        res.status(500).json({
            response: 'Error en el sistema'
        })
    }
}