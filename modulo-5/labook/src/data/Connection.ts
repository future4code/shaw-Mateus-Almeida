import { Knex } from "knex";
import knex from "knex";

export class connection {
    protected static connection : Knex = knex({
        client:"mysql",
    connection:{
        host:process.env.DB_HOST,
        port: 3306,
        user:process.env.DB_USER,
        password:process.env.DB_PASS,
        database:process.env.DB_NAME,
    },
});
}
/*
sempre que quiser chamar a clase para conectar ao banco vou usar a funcao >>>

     

                  



*/