import knex from "knex";

const connection = knex ({ // estabelece conexao com o banco
    client: "mysql",
    connection:{
        host: "usar host eviado ate a min",
        port:3306,
        user:" meu user ",
        password:"minha senha ",
        database:"shaw-nome",
        multiStatements:true
    }
})
export default connection
// os tipos varchar vao precisar de ""