const { lerDados, salvarDados } = require("./gerenciarDados");

function criarPaciente(req, res) {
    if(!validarDados(req)){
        return res.status(400).send('Todos os dados precisam ser preenchidos.')
    }
    if (!validarData(req.body.dataNascimento)) {
        return res.status(400).send('Data invalida.')
    }
    
    const paciente = {
        id: Date.now(),
        nome : req.body.nome,
        dataNascimento : req.body.dataNascimento
    }

    const pacientes = lerDados();
    console.log(pacientes);
 
    if (!pacientes) {
       salvarDados([paciente]);
       return res.status(201).send('Paciente salvo com sucesso!');
    } 
 
    pacientes.push(paciente);
    salvarDados(pacientes);
    return res.status(201).send('Paciente salvo com sucesso!');

    function validarDados (req) {
        if (!req.body || !req.body.nome || !req.body.dataNascimento) {
            return false
        }
        return true
    }

    function validarData (dataNascimento) {
        if (typeof dataNascimento !== 'string' || dataNascimento.trim() === '') {
            return false;
        }
        const Data = new Date(dataNascimento);
        const dataAtual = new Date();
    
        if (isNaN(Data.getTime())) {
            return false;
        }
        const [ano, mes, dia] = dataNascimento.split('-').map(Number);
        if (Data.getFullYear() !== ano || (Data.getMonth() + 1) !== mes || Data.getDate() !== dia) {
            return false;
        }
        if (Data.setHours(0, 0, 0, 0) > dataAtual.setHours(0, 0, 0, 0)) {
            return false;
        }
    
        return true
    }
}

module.exports = criarPaciente