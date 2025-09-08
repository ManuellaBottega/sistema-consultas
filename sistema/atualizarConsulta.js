const { lerDados, salvarDados } = require("./gerenciarDados");

function atualizarConsulta(req, res) {
    const consultas = lerDados();
    const { id } = req.params;
    const { data, idMedico, idPaciente, assunto } = req.body;

    const consultaIndex = consultas.findIndex(consulta => consulta.id == id);

    if (consultaIndex === -1) {
        return res.status(404).send('Consulta não encontrada.');
    }

    const consultaAtualizada = {
        ...consultas[consultaIndex],
        idMedico: idMedico || consultas[consultaIndex].idMedico,
        idPaciente: idPaciente || consultas[consultaIndex].idPaciente,
        data: data || consultas[consultaIndex].data,
        assunto: assunto || consultas[consultaIndex].assunto
    };

    consultas[consultaIndex] = consultaAtualizada;
    salvarDados(consultas);

    return res.status(200).send('Consulta atualizada com sucesso!');
}

module.exports = atualizarConsulta;