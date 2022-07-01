import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/user";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";


export async function signup(req: Request, res: Response) {
    try {
        const { name, email, password, role } = req.body

        if (!name || !email || !password || !role) {
            res
                .status(422)
                .send(
                    "insira corretamente os dados !"
                );
        }

        const userDataBase = new UserDataBase();
        const user = await userDataBase.findUserByEmail(email);

        if (user) {
            res.status(409)
            .send(
                "esse email ja esta em uso!"
                );
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate()

        const hashManager = new HashManager();
        const HashPassword =  await hashManager.hash(password);
  
  
        const newUser = new User(id,name,email ,HashPassword, role);
         await userDataBase.createUser(newUser);
       

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