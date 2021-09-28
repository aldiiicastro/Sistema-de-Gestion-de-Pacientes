const express = require('express');
const router = express.Router();
const pacienteControllers = require('../controllers/pacienteControllers');
const timeout = require('connect-timeout');


router.get('/pacientes', timeout('20s'), async (req, res) => {
    pacienteControllers.patient_register(req, res)
})

module.exports = router;