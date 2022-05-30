import express from 'express'
import cors from 'cors'
import { getMaxListeners, send } from 'process';
import { type } from 'os';
const app = express();
app.use(express.json());
app.use(cors());
/*
// codigo para fazer a primeira chamada para jsonplaceholder
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  */

app.get('/', (req, res) => {
    res.send("funcionou a api!")

})

//2
type idUser ={
 id: number,
 title:string,
 body:string,
 userId:number
}

type user = {
    id: string | number,
    name: string,
    phone: number,
    email: string,
    website: string
    post ?: idUser
}
//3
const usuarios: user[] = [
    {
        id: 47,
        name: "obi-wan-kenobi",
        phone: 234123413412,
        email: "kenobi@gmail.com",
        website: "kenobi.com.br",
        post:{
            id: 3452345,
             title:"um dos maiores mestre jedi ",
             body:"Seus olhos podem te enganar, não confie neles.",
            userId:3
        }
    },
    {
        id: 30,
        name: "darth-wader",
        phone: 239882,
        email: "lordewader@gmail.com",
        website: "wader.com.br",
        post:{
            id: 34523452341234,
             title:"mora como heroi ou viva o basntante para se torna um vilão",
             body:"Sua falta de fé é perturbadora..",
            userId:4
        }

    },
    {
        id: 957,
        name: "yoda",
        phone: 23415555,
        email: "yodinha@gmail.com",
        website: "yoda.com.br"
    },
    {
        id: 49,
        name: "c3-p0",
        phone: 211111112,
        email: "chatinho@gmail.com",
        website: "chatinho.com.br"
    }
]

// 4
// usei o res.send para enviar o array com as pessoas que acebi de criar 
// usei  o metodo app.get para enviar e "/usuarios" para definiar a rota depois do localhost3003
app.get("/usuarios", (req, res) => {
    res.send(usuarios)
});
//5
// 6]
// achei melhor ciar o array de post dentro do propio usuario porque achei mais facil de linka
//7
/*
app.get("/post/:id", (req, res) => {
    res.send(usuarios)
});
*/

// usei o app.listen para fazer o pc de servidor usando a porta 3003
app.listen(3003, function () {
    console.log(" rodando o pc como servidor !");
});

