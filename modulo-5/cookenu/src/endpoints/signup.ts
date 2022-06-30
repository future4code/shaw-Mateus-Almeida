import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { IdGenerator } from "../services/idGenerator";


export async function signup(req: Request, res: Response) {
    try { 
  const {name , email , password , role}= req.body
   if (!name || !email || password || !role){
    res.status(422).send("insira corretamente os dados !")
   }
   const userDataBase = new UserDataBase();
   const user = userDataBase.findUserByEmail(email);
   if (user){
    // descobrir porque o email fala que a promisse sempre volta verdadeiro
    res.status(409).send("ja email ja esta cadastrado!");
   }
const idGenerator = new IdGenerator();
 const  id = idGenerator.generate()

    } catch (error: any) {
        res.status(400).send(error.messagem)
    }
}








/*
1 =)
- **Signup**
    
    **Método:** POST
    **Path:** `/signup`
    
    **Entradas:**
    
    Body
    
    
    {
        "name": "Alice",
        "email": "alice@lbn.com",
        "password": "123456"
    }
    
    
    **Saídas**
    {
    "access_token": "token de acesso"

     }

*/