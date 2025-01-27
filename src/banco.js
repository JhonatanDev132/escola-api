import mysql2 from "mysql2";

/* const conexao = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'tec-api'
});
 */

// Banco de dados db4free
const conexao = mysql2.createConnection({
    host : 'db4free.net',
    user : 'jhonatan',
    password : 'abcd1234',
    database : 'jhonners_api'
});

// Efetivando a conexão
conexao.connect( erro => {
    if(erro){
        console.error(`Erro ao conectar: ${erro.message}`)
    } else {
        console.log(`Banco de dados conectado com sucesso!${conexao.config.host}`)
    }
});

export default conexao;