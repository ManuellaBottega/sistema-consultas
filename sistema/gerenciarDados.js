const fs = require('fs');
const path = require('path');

function lerDados() {
    const filePath = path.join(__dirname, '/dados.json');
 
    if (!fs.existsSync(filePath)) {
       return undefined;
    }
 
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return data;
}

function criarDados() {
    const filePath = path.join(__dirname, '/dados.json');
    fs.writeFileSync(filePath, `[\n ${ data.map((d) => JSON.stringify(d)).join(',\n ') } \n]`);
 }

module.exports = { lerDados, criarDados };