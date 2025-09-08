const { lerDados, salvarDados } = require("./gerenciarDados");

function atualizarMedico(req, res) {
    const medicos = lerDados();
    const { id } = req.params;
    const { nome, especialidade } = req.body;

    const medicoIndex = medicos.findIndex(medico => medico.id == id);

    if (medicoIndex === -1) {
        return res.status(404).send('Medico não encontrado.');
    }

    const medicoAtualizado = {
        ...medicos[medicoIndex],
        nome: nome || medicos[medicoIndex].nome,
        especialidade: especialidade || medicos[medicoIndex].especialidade
    };

    medicos[consultaIndex] = medicoAtualizado;
    salvarDados(medicos);

    return res.status(200).send('Medico atualizado com sucesso!');
}

module.exports = atualizarMedico;