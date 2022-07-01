import * as jwt from "jsonwebtoken"
import { USER_ROLES } from "../entities/user"

export interface AuthenticationData{
    id:string,
    role: USER_ROLES
}

/*
export class Authenticator {
    public generate(input: AuthenticationData):string{
    const token = jwt.sign(input, process.env.JWT_KEY,{
        expiresIn:process.env.ACESS_TOKEN_EXPIRES_IN,
    });
    return token ;
    }
    public getTokenData(token: string):AuthenticationData{
        const data = jwt.verify(token, process.env.JWT_KEY)
        return data as AuthenticationData
    }
}
*/
// descobir porque esta dando um erro falando que nao da pra passar string em um metodo private , descobrir de onde esta saindo esse metodo private e alterar