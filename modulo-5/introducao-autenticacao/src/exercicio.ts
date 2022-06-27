

/* 1 
 a ) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

 R=   sim pois com o id em forma de string podememos passar ele como numero , como simbulos e ate as propias letras
*/
/* 
b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id. 
*/
/* 


/*
2-
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};

// a




*/

