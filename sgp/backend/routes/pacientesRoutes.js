const express = require('express');
const router = express.Router();
const pacienteControllers = require('../controllers/pacienteControllers');
const timeout = require('connect-timeout');

/* CRUD DE PACIENTE */ 
router.post('/registrarPaciente', timeout('50s'), async (req, res) => {
    pacienteControllers.register_patient(req, res)
});

router.delete('/borrarPaciente/:id', timeout('50s'), async (req, res) => {
    pacienteControllers.delete_patient(req, res)
});

router.post('/actualizarPaciente', timeout('20s'), async (req, res) => {
    pacienteControllers.update_patient(req, res)
})
/* FIN CRUD DE PACIENTE */ 

/* ACTUALIZAR ESTADO DE PACIENTE */
router.put('/actualizarPaciente/atendiendose/:id', timeout('30s'), async (req,res) => {
    pacienteControllers.update_turn_attending(req,res);
})

router.put('/actualizarPaciente/esperando/:id', timeout('30s'), async (req,res) => {
    pacienteControllers.update_turn_waiting(req,res);
})

router.put('/actualizarPaciente/atendido/:id', timeout('30s'), async (req,res) => {
    pacienteControllers.update_turn_attended(req,res);
})

router.put('/actualizarPaciente/confirmado/:id', timeout('30s'), async (req,res) => {
    pacienteControllers.update_turn_confirmed(req,res);
})

router.put('/actualizarPaciente/internar/:id',timeout('30s'), async (req,res) => {
    pacienteControllers.update_turn_internee(req,res);
})
/* FIN ACTUALIZAR ESTADO DE PACIENTE */

/* PACIENTE SEGUN UN ESTADO */
router.get('/pacienteEnEspera', timeout('30s'), async (req, res) => {
    pacienteControllers.get_firts_patient_waiting(req, res);
});
/* FIN PACIENTE SEGUN UN ESTADO */

/* LISTAS DE PACIENTES */
router.get('/todosLosPacientes', timeout('20s'), async (req,res) => {
    pacienteControllers.get_all_patients(req,res);
});

router.get('/pacientes-esperando-atendiendose', timeout('30s'), async (req, res) => {
    pacienteControllers.get_waiting_attending_patients(req, res);
});

router.get('/pacientesAtendidos', timeout('30s'), async (req, res) => {
    pacienteControllers.get_attended_patients(req, res);
});

router.get('/pacientesEnTurno', timeout('30s'), async (req, res) => {
    pacienteControllers.get_attending_patients(req, res);
});

router.get('/pacientesEsperando', timeout('30s'), async (req, res) => {
    pacienteControllers.get_waiting_patients(req, res);
});

router.get('/pacientesConfirmados', timeout('30s'), async (req, res) => {
    pacienteControllers.get_confirmed_patients(req, res);
});
/* FIN LISTAS DE PACIENTES */









module.exports = router;