const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'dados.json');

function lerDados() {
    if (!fs.existsSync(dataFilePath)) {
        return { medicos: [], pacientes: [], consultas: [] };
    }
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
}

function salvarDados(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

module.exports = { lerDados, salvarDados };