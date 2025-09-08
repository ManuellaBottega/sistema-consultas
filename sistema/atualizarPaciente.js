const { lerDados, salvarDados } = require("./gerenciarDados");

function atualizarPaciente(req, res) {
    const pacientes = lerDados();
    const { id } = req.params;
    const { nome, dataNascimento } = req.body;

    const pacienteIndex = pacientes.findIndex(paciente => paciente.id == id);

    if (pacienteIndex === -1) {
        return res.status(404).send('Paciente não encontrado.');
    }

    const pacienteAtualizado = {
        ...pacientes[pacienteIndex],
        nome: nome || pacientes[pacienteIndex].nome,
        dataNascimento: dataNascimento || pacientes[pacienteIndex].dataNascimento
    };

    pacientes[pacienteIndex] = pacienteAtualizado;
    salvarDados(pacientes);

    return res.status(200).send('Paciente atualizado com sucesso!');
}

module.exports = atualizarPaciente;