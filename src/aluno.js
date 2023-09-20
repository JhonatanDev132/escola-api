import conexao from "./banco.js";

// CRUD

// LER/EXIBIR todos os alunos
function ler(res) {
    const sql = "SELECT * FROM alunos ORDER BY nome";

    conexao.query(sql, (erro, resultado) => {
        if(resultado.length === 0) {
            res.status(204).end(); // É importante trabalhar com os status http. 204 = sem conteúdo.
            // .end() encerra a execução
            return;
        }

        if (erro) {
            res.status(400).json(erro.code); // BAD request
        } else {
            res.status(200).json(resultado);

        }

    });
}

// Inserindo alunos no banco de dados
function inserir(aluno, res){
    const sql = "INSERT INTO alunos SET ? ";

    conexao.query(sql, aluno, (erro) => {
        if (erro) {
            res.status(400).json(erro.code);
        } else {
            res.status(201).json({"Status" : "Aluno inserido"});
            // res.status(201).end();
        }
    })
}

export {ler, inserir}