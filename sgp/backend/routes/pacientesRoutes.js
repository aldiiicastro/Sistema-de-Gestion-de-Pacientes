const express = require('express');
const router = express.Router();
const pacienteControllers = require('../controllers/pacienteControllers');
const timeout = require('connect-timeout');


router.post('/altaPaciente', timeout('50s'), async (req, res) => {
    pacienteControllers.patient_register(req, res)
});

router.delete('/borrarPaciente/:id', timeout('50s'), async (req, res) => {
    pacienteControllers.delete_patient(req, res)
});

router.get('/allPatients', timeout('20s'), async (req,res) => {
    pacienteControllers.get_all_patients(req,res);
});

router.get('/pacientesAtendidos', timeout('30s'), async (req, res) => {
    pacienteControllers.get_attended_patients(req, res);
});


router.get('/pacienteEnTurno', timeout('30s'), async (req, res) => {
    pacienteControllers.get_attending_patients(req, res);
});

router.get('/pacientesEnEspera', timeout('30s'), async (req, res) => {
    pacienteControllers.get_firts_waitting_patients(req, res);
});


router.get('/waitingPatients', timeout('30s'), async (req, res) => {
    pacienteControllers.get_waiting_patients(req, res);
});

router.put('/attendingPatient/:id', timeout('30s'), async (req,res) => {
    pacienteControllers.update_turn_attending(req,res);
})

router.put('/waittingPatient/:id', timeout('30s'), async (req,res) => {
    pacienteControllers.update_turn_waitting(req,res);
})

router.put('/attededPatient/:id', timeout('30s'), async (req,res) => {
    pacienteControllers.updateTurnState(req,res);
})

router.post('/updatePatientData', timeout('20s'), async (req, res) => {
    pacienteControllers.update_patient(req, res)
})


module.exports = router;