const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes')
const pacientesRoutes = require('./pacientesRoutes')

router.use(userRoutes)
router.use(pacientesRoutes)

module.exports = router;