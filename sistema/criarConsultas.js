const medicos = require('../dados/dadosMedico');
const pacientes = require('../dados/dadosPaciente');

function criarConsultas(req, res) {
    if (!validarDados(req)) {
        return res.status(400).send('Todos os dados precisam ser preenchidos.')
    }
    if (!validarIDMedico(req.body.idMedico)) {
        return res.status(400).send('ID do medico invalido.')
    }
    if (!validarIDPaciente(req.body.idPaciente)) {
        return res.status(400).send('ID do paciente invalido.')
    }
    if (!validarData(req.body.idData)) {
        return res.status(400).send('Data invalida.')
    }

    const consulta = {
        id: Date.now(),
        idPaciente : req.body.idPaciente,
        idMedico : req.body.idMedico,
        data : req.body.data,
        assunto : req.body.assunto
    }

    const Consultas = lerDados();
    console.log(Consultas);
 
    if (!Consultas) {
       criarDados([novaConsulta]);
       return res.status(201).send('Consulta salva com sucesso!');
    } 
 
    Consultas.push(novaConsulta);
    criarDados(Consultas);
    return res.status(201).send('Consulta salva com sucesso!');
 }

function validarDados (req) {
    if (!req.body || !req.body.idPaciente || !req.body.idMedico || !req.body.data || !req.body.assunto) {
        return false
    }
    return true
}

function validarData (data) {
    if (typeof data !== 'string' || data.trim() === '') {
        return false;
    }
    const Data = new Date(data);
    const dataAtual = new Date();

    if (isNaN(Data.getTime())) {
        return false;
    }
    const [ano, mes, dia] = data.split('-').map(Number);
    if (Data.getFullYear() !== ano || (Data.getMonth() + 1) !== mes || Data.getDate() !== dia) {
        return false;
    }
    if (Data.setHours(0, 0, 0, 0) > dataAtual.setHours(0, 0, 0, 0)) {
        return false;
    }

    return true
}
    
function validarIDMedico (idMedico) {
    return medicos.some(medico => medico.id === parseInt(idMedico));
}

function validarIDPaciente (idPaciente) {
    return pacientes.some(paciente => paciente.id === parseInt(idPaciente));
}


module.exports = criarConsultas