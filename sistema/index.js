const express = require('express')
const router = express.Router()

const criarMedico = require('./criarMedico');
const criarPaciente = require('./criarPaciente');
const criarConsulta = require('./criarConsulta');

router.post('/medico', criarMedico);
router.post('/paciente', criarPaciente);
router.post('/consulta', criarConsulta);

module.exports = router;