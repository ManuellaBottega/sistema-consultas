const express = require('express')
const router = express.Router()

const criarMedico = require('./criarMedico');
const criarPaciente = require('./criarPaciente');
const criarConsultas = require('./criarConsultas');
const listarConsulta = require('./listarConsulta');
const listarMedico = require('./listarMedico');
const listarPaciente = require('./listarPaciente');
const atualizarConsulta = require('./atualizarConsulta');
const atualizarMedico = require('./atualizarMedico');
const atualizarPaciente = require('./atualizarPaciente');

router.post('/medico', criarMedico);
router.post('/paciente', criarPaciente);
router.post('/consulta', criarConsultas);
router.get('/medico', listarMedico);
router.get('/paciente', listarPaciente);
router.get('/consulta', listarConsulta);
router.put('/medico/:id', atualizarMedico);
router.put('/paciente/:id', atualizarPaciente);
router.put('/consulta/:id', atualizarConsulta);

module.exports = router;