const express = require('express');

const app = express();
const porta = 3342;

function mostraPorta(){
    console.log('Servidor criado e rodando na porta ', porta);
}

app.listen(porta, mostraPorta);