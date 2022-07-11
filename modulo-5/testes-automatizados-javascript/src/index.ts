import knex from 'knex'
import { config } from 'dotenv'

config()

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true
   },
});
/*

export const pessoas = [
   {
      id: 123,
      nome: "Fulano"
   },
   {
      id: 98542,
      nome: "Ciclano"
   }
]

export const filtraPessoa = (arrayPessoas: any, id: number) => {
   // escreva a logica aqui
   
}
export const retornarPrimeiraPessoa = async() =>{
   // retorna a primeira pessoa da tabela user
 
   
}


export const trataErro = (id:string,name:string) =>{
   try {
      
     if(!id || !name){
        throw new Error("Esta faltando parametros");
        
     }
   } catch (error) {
      
   }
}
*/