import express, { Request, Response } from 'express'
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors());


type User = {
    nome: string,
    cpf: string,
    idade: number,
    saldo?: number
}
let listaUsuariosBanco: User[] = [
    {
        nome: "mateus almeida",
        cpf: "000-000-000-00",
        idade: 24,
        saldo: 146000000
    },
    {

        nome: "mateus vinicius",
        cpf: "000-000-23-00",
        idade: 21,
        saldo: 1453
    }
]



// criando conta 
app.post("/criandoConta", (req: Request, res: Response) => {
    let errorCode = 400
    // criei o novo user e passei as req para exigir o body
    const novoUser: User = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        idade: req.body.idade,
        saldo: req.body.saldo
    }
    // fiz um try catch para tratar os erros 
    // e tanbem um if e else para ver se as informaçoes seriam validas
    try {

        if (!novoUser || novoUser.nome === "") {
            errorCode = 403
            throw new Error("error, insira um nome valido!")
            // usar um regex no cpf
        } else if (!novoUser || novoUser.cpf === "") {
            errorCode = 403
            throw new Error("error, insira um cpf valido")
        } else if (!novoUser || novoUser.idade < 18) {
            errorCode = 403
            throw new Error("espere completar 18 anos! ")
        }
        // fiz um push para adicionar o novoUser a lista  de usuarios do banco
        listaUsuariosBanco.push(novoUser)

        // caso tivesse um erro iria cair no n o catch como error
    } catch (error: any) {
        res.status(404).send(error.message)
    }
    // se tudo de certo cria o novo user e retorna 
    res.status(200).send(novoUser)
    // res.send(listaUsuariosBanco)
    //console.table(novoUser);
    console.table(listaUsuariosBanco)

})

//pegando saldo 
app.get("/pegarSaldo", (req: Request, res: Response) => {
    try {
        // criei um get para mostrar os usuarios 
        // usei o nomeU e cpfU para passar como req.query e passa eles na api 
        // e me retorna se tinha ou nao o user equando retornar , retorna o saldo 
        const { nomeU } = req.query
        // usei para  passar como query na api
        const { cpfU } = req.query
        // usei para  passar como query na api
        const saberSaldo = listaUsuariosBanco.filter((user) => {
// fiz um filter na listaUsuarios do banco para buscar se existia a pessoa 
// com esse nome e cpf que passaram no query
            if (user.nome === nomeU && user.cpf === cpfU) {
                return listaUsuariosBanco
            }

        })
        // se tudo fosse ok cai no status 200 e retorna a pessoa para saber o saldo
        res.status(200).send(saberSaldo)
    } catch (error: any) {
        // se nao cai no error e fala que nao enconoutou a pessoa / saldo
        res.status(404).send("nao foi encontra o user e o saldo ")
    }
})
/*



//adicionar saldo 
app.put("/adicionarSaldo", (req: Request, res: Response) => {


})
*/
















app.listen(3003, function () {
    console.log("Tô rodando!");
});