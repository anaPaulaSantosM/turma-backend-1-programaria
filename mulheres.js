const express = require('express');
const router = express.Router();

const app = express();
const porta = 3342;

const mulheres = [
    {
    nome: 'Simara Conceição',
    imagem: 'https://github.com/simaraconceicao.png',
    minibio: 'Desenvolvedora e instrutora'
},
{
    nome: 'Iana Chan',
    imagem: 'https://bit.ly/3LJIyOF',
    minibio: 'Desenvolvedora e instrutora'
},
{
    nome: 'Luana Pimentel',
    imagem: 'https://bit.ly/3FKpFaz',
    minibio: 'Desenvolvedora e instrutora'
}
]

function mostraMulheres(request, response) {
    response.json(mulheres);
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta);
}

app.use(router.get('/mulheres', mostraMulheres));
app.listen(porta, mostraPorta);