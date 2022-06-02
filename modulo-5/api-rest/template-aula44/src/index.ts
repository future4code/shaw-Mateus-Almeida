import express, { Request, Response } from 'express'
import cors from 'cors'
import { connected } from 'process'
import { error } from 'console'
import { type } from 'os'

const app = express()
app.use(express.json())
app.use(cors())

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60
  }
]
// 1
// a = usei o metodo do get 
// b= a entidade esta sendo o "/useres " , achei intuitivo para retorna a lista 

// passando o app.get para chamar o path de buscar os usuarios por "/users"
// usei o " as string " para garatir que ele virar como string

app.get("/users", (req: Request, res: Response) => {
  try {

    res.status(200).send(users)
    // usei um res de resposta de status 200 para falar que estava tudo ok, e retornei com o send(users) a lista de usuarios

  } catch (error) {
    res.status(400).send("ocorreu algum erro na requisição, pode ter sido um erro de várias naturezas")
    // caso aconteça algum erro ira enviar a msg de erro 
  }

})

//2
//a= passei usando o metodo query para em vez de mexer na entidade a pessoa poder usar apenas para acessar e chamar o objeto do array com o nome que o filtro buscava
// b=sim o query ele ira tipar para normal ou admin e o filtro que eu fiz so retorna se os valores forem iguais

app.get("/users/admin", (req: Request, res: Response) => {
  try {
    // O QUERY FOI USADO PARA BUSCAR UM OBJETO DENTRO DE UM OBJETO 
    // usei o type para falar se era admin ou normal
    const { type } = req.query
    // fiz uma variavel para receber os valores do filtro que fiz
    const userAdimistradores = users.filter((user) => {
      // usei um if para ver se o tipo do usuario.type era = admin ou normal
      if (user.type === type) {
        return users
      }

    })
    // se ele passar pelo if ira retorna o status 200 e me retornara o array criado para receber o filter 
    res.status(200).send(userAdimistradores)
  } catch (error: any) {
    res.status(404).send("nao foi encotrado o usuario admin ")
  }
})

// 3
//a= usei para o parametro a ser passado na entidade ser o nome da pessoa coresponde ao array

app.get("/users/:usuario", (req: Request, res: Response) => {
  try {
    // fiz função  para passando o req.params para alterar a entidade
    const { usuario } = req.params
    const buscandoUsuario = users.filter((user) => {
      if (user.name === usuario)
        return users
    })

    res.status(200).send(buscandoUsuario)
  } catch (error: any) {
    //b =
    res.status(404).send("nao foi posivel encontrar seu usuario!")
  }
})



// 4
app.post("/criandoUsuario",(req: Request, res: Response)=>{
let  errorCode = 400
  const novoUsuario :User ={
  id:req.body.id,
  name:req.body.name,
  email:req.body.email,
  type:req.body.type,
  age:req.body.age
}
try {
  console.log(novoUsuario);
  
  if (!novoUsuario.id) {
   errorCode =403
   throw new Error("id vazio")
  } else if (!novoUsuario || novoUsuario.name === ""){
    errorCode =403
    throw new Error("nome vazio")
  }else if (!novoUsuario || novoUsuario.email === ""){
    errorCode =403
    throw new Error("email vazio")
  }else if (novoUsuario.type !== "NORMAL" && novoUsuario.type !== "ADMIN"){
    errorCode =403
    throw new Error("TYPE ERRADO ")
  }
  else if (!novoUsuario || novoUsuario.age === 0){
    errorCode =403
    throw new Error("idade vazio")
  }
  res.send(novoUsuario)
} catch (error:any) {
  res.status(404).send(error.message)
}
  

})

  






// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
