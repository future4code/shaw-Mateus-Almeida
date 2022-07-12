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


/* O tema da aula de hoje vai ser um joguinho bem simples de luta. Em um exercício mais para frente, vamos implementar uma função que faça um personagem 
"bater" no outro. Antes disso, precisamos  fazer uma função que vai validar as informações de cada personagem. Ele deve possuir 4 parâmetros: nome, vida,
 defesa e força. 
A força representa o quanto o personagem pode tirar de vida do outro. A defesa é um valor que representa o quanto o outro personagem consegue se defender, 
a conta é simples: quando um personagem ataca  o outro, ele perde o valor `(força - defesa)` da sua vida. Todos os personagens começam com a vida `1500` e,
 ao chegar no `0`, eles morrem.*/

/* *a. Crie uma interface para representar os personagens* */
export interface Character {
   name: string;
   life: number;
   strength: number;
   defense: number;
 }


//exercicio 3
 export const performAttack = (
   attacker: Character,
   defender: Character,
   validator: (input: Character) => boolean
 ) => {
   if (!validator(attacker) || !validator(defender)) {
     throw new Error("Invalid character");
   }
 
   if (attacker.strength > defender.defense) {
     defender.life -= attacker.strength - defender.defense;
   }
 };
 