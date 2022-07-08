// se precisar de usuario cria a tabela no banco de dados
// primeiro passo
/*
create table labook_user-rec(
    id  varchar(255) PRIMARY_KEY,
    nome varchar(255)  NOT NULL,
    email varchar(255)  NOT NULL,
    senha varchar(255)  NOT NULL,
);
*/

import { application } from "express";

// TESTAR SE AS COMNEXOES ESTÃO FUNCIONANDO  DO GET POR  EXP

//CRIA O ENDEPOINT NO REQUEST.REST  PARA VER SE ESTAR FUNCIONANDO 
// criar um cadastro de usuario na pasta model com o arquivo user.ts
/*
export class user{
               
    constructor(
        private id: string,
        private nome: string ,
        private emaiil : string,
        private senha : string 

    ){}
}
// para poder acesar de fora por ser privado 
getId=()=>{
   return  this.id
}  
// e posso repitir para o nome , email e senha 
*/
// tudo que tiver no controler tem que ter req e res 
// somente o controle tem req e res
import knex, { Knex } from "knex"
import dotenv from "dotenv"

dotenv.config()

export class BaseDatabase {
    protected static connection: Knex = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT || "3306"),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SCHEMA,
            multipleStatements: true
        }
    })
}


