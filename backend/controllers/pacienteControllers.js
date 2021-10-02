const { response, json } = require('express');
const mongoose = require('mongoose');
const Patient = mongoose.model('Patient')

exports.patient_register = async function (req, res) {
    try {
        const body = req.body
        const date = new Date()

        if(body.isNn) {
            const patientNn = await Patient.create({name: '', surname: '', dni: "", street: '', number: '',
                floor: '', zipCode: '', location: '', state: '',
                isNn: body.isNn, clinicHistory: '', sympthoms: body.sintomas, hasExtraSympthoms: body.bSintomasExtras,
                dataExtraSympthoms: body.sintomasExtras, dataNN: body.infoNN, entryDate: date, turnState: 'WAITING'})

            return res.status(201).json({
                response: 'Paciente NN ingresado con exito!',
                data: patientNn
            })
        } else if(!body.isNn && (body.nombre.trim() === '' || body.apellido.trim() === '' || body.dni.trim() === '')) {
            return res.status(400).json({
                response: 'Error al Ingresar, paciente sin datos personales'
            })
        }

        const patient = await Patient.create({name: body.nombre, surname: body.apellido, dni: body.dni, street: body.calle, number: body.numero,
                                                floor: body.piso, zipCode: body.codigo_postal, location: body.localidad, state: body.provincia,
                                                isNn: body.isNn, clinicHistory: '', sympthoms: body.sintomas, hasExtraSympthoms: body.bSintomasExtras,
                                                dataExtraSympthoms: body.sintomasExtras, dataNN: body.infoNN, entryDate: date, turnState: 'WAITING'})
                                                
        res.status(201).json({
            response: `Paciente ${patient.name} ${patient.surname} ingresado con Exito!`,
            data: patient
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            response: 'Error en el sistema'
        })
    }
}

exports.delete_patient = async function (req, res) {
    try {
        if (!req.params.id) {
            return res.status(400).json({
                response: 'No se pasó ningún Id como parametro'
            })
        }

        const user = await Patient.deleteOne({ _id: req.params.id });

        res.status(200).json({ response: 'Paciente eliminado correctamente!' })

    } catch (error) {
        res.status(500).json({
            response: 'Error en el sistema'
        })
    }
}