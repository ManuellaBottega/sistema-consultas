const { lerDados } = require("./gerenciarDados");

function listarConsulta(req, res) {
    const consultas = lerDados();

    if (!consultas || consultas.length === 0) {
        return res.status(404).send('Nenhuma consulta encontrada.');
    }

    return res.status(200).json(consultas);
}

module.exports = listarConsulta;