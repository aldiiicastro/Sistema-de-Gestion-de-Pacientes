const express = require('express');
const router = express.Router();
const pacienteControllers = require('../controllers/pacienteControllers');
const timeout = require('connect-timeout');


router.post('/altaPaciente', timeout('50s'), async (req, res) => {
    pacienteControllers.patient_register(req, res)
})

router.delete('/borrarPaciente/:id', timeout('50s'), async (req, res) => {
    pacienteControllers.delete_patient(req, res)
})

router.get('/allPatients', timeout('20s'), async (req,res) => {
    pacienteControllers.get_all_patients(req,res);
});

module.exports = router;