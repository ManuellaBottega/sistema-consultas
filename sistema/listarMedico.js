const { lerDados } = require("./gerenciarDados");

function listarMedico(req, res) {
    const medicos = lerDados();

    if (!medicos || medicos.length === 0) {
        return res.status(404).send('Nenhum medico encontrado.');
    }

    return res.status(200).json(medicos);
}

module.exports = listarMedico;