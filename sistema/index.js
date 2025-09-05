const express = require('express')
const router = express.Router()

const criarMedico = require('./criarMedico');
const criarPaciente = require('./criarPaciente');
const criarConsultas = require('./criarConsultas');

router.post('/medico', criarMedico);
router.post('/paciente', criarPaciente);
router.post('/consulta', criarConsultas);

module.exports = router;