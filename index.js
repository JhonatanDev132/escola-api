import express from 'express';
import { inserir, ler } from "./src/aluno.js";
const app = express();
const porta = 8080;

// Adicionando suporte ao formato json
app.use(express.json())

// Adicionando suporte a dados vindo de formulários
app.use(express.urlencoded({extended : true}))

// CRIANDO AS ROTAS

// Raiz da aplicação
app.get('/', (req, res) => {
    res.send(`Raiz da API NodeJS + Express + MySQL`);
});

// EXIBINDO TODOS OS ALUNOS
app.get('/alunos', (req, res) => {
    // res.send(`Dados de todos os alunos`);
    ler(res);
});

// EXIBINDO DADOS DE UM ALUNO
app.get('/alunos/:id', (req, res) => {
    res.send(`Dados de um alunos`);
});

// INSERINDO NOVO ALUNO
app.post('/alunos', (req, res) => {
   // res.send(`Inserindo UM aluno`)
   const novoAluno = req.body;
   inserir(novoAluno, res)
});


// ATUALIZANDO DADOS DE UM ALUNO
app.patch('/alunos/:id', (req, res) => {
    res.send(`Atualizando dados de UM aluno`)
});


// EXCLUINDO ALUNOS
app.delete('/alunos/:id', (req, res) => {
    res.send(`Excluindo alunos`)
});




// Executando o servidor
app.listen(porta, () => {
    console.log(`Servidor NodeJS rodando na porta ${porta}`);
});
