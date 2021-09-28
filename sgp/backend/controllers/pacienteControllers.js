const { response } = require('express');
const mongoose = require('mongoose');
const Pacientes = mongoose.model('Pacientes');

exports.patient_register = async function (req, res) {
    try {
        const reqBody = req.body

        res.status(200).json()
    } catch (error) {
        res.status(404).json(error)
    }
}