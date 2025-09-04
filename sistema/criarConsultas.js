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

    function validarDados (req) {
        if (!req.body || !req.body.idPaciente || !req.body.idMedico || !req.body.data || !req.body.assunto) {
            return false
        }
        return true
    }

    function validarData (data) {
        data = parseInt(data);
        const dataAtual = new Date();

        if (isNaN(data) || data < 0 || data > dataAtual) {
            return false
        }
        return true
    }

    function validarIDMedico (idMedico) {

    }

    function validarIDPaciente (idPaciente) {

    }
}

module.exports = criarConsultas