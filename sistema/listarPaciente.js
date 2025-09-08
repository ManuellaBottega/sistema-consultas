const { lerDados } = require("./gerenciarDados");

function listarPaciente(req, res) {
    const pacientes = lerDados();

    if (!pacientes || pacientes.length === 0) {
        return res.status(404).send('Nenhum paciente encontrado.');
    }

    return res.status(200).json(pacientes);
}

module.exports = listarPaciente;