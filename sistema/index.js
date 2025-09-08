const express = require('express')
const router = express.Router()

const criarMedico = require('./criarMedico');
const criarPaciente = require('./criarPaciente');
const criarConsultas = require('./criarConsultas');
const listarConsulta = require('./listarConsulta');
const listarMedico = require('./listarMedico');
const listarPaciente = require('./listarPaciente');

router.post('/medico', criarMedico);
router.post('/paciente', criarPaciente);
router.post('/consulta', criarConsultas);
router.get('/medico', listarMedico);
router.get('/paciente', listarPaciente);
router.get('/consulta', listarConsulta);

module.exports = router;