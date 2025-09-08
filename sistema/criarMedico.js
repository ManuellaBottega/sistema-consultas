const { lerDados, salvarDados } = require("./gerenciarDados");

function criarMedico(req, res) {
    if(!validarDados(req)){
        return res.status(400).send('Todos os dados precisam ser preenchidos.')
    }
    
    const medico = {
        id: Date.now(),
        nome : req.body.nome,
        especialidade : req.body.especialidade
    }

    const medicos = lerDados();
    console.log(medicos);
 
    if (!medicos) {
       salvarDados([medico]);
       return res.status(201).send('Medico salvo com sucesso!');
    } 
 
    medicos.push(medico);
    salvarDados(medicos);
    return res.status(201).send('Medico salvo com sucesso!');

    function validarDados (req) {
        if (!req.body || !req.body.nome || !req.body.especialidade) {
            return false
        }
        return true
    }
 }

module.exports = criarMedico;