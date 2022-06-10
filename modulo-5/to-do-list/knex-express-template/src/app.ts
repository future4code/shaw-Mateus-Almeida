import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
// biblioteca para fornecer id
import { v4 as uuidv4 } from "uuid"
import connection from "./connection";
import { userInfo } from "os";

const app = express();

app.use(express.json());
app.use(cors());


// criando user e jogando ao banco de dados
app.post("/createUser", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { name, apelido, email } = req.body
    const user = {
      id: uuidv4(),
      name,
      apelido,
      email
    }
    if (!name || name === "") {
      errorCode = 403
      throw new Error("error, insira um nome valido!")
    } else if (!apelido || apelido === "") {
      errorCode = 403
      throw new Error("error, insira um apelido valido")
    } else if (!email || email === "") {

    }
    await connection("usuarios")
      .insert(user)
    res.status(201).send("usuario criado com sucesso")
  } catch (error: any) {
    res.status(400).send("nao foi possivel criar o user")
  }
})








// 2

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const result = await connection("usuarios")
      // o que vai me retorna quando achar o id que foi passado como params
      .select("id", "apelido")
      // where = onde 
      .where({ id: req.params.id })
    res.status(201).send(result)

  } catch (error: any) {
    res.status(400).send("nao foi possivel achar o usuario!")
  }
})













const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app