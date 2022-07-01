import { User } from "../entities/user";
import { baseDataBase } from "./baseDataBase";

export class UserDataBase extends baseDataBase {
public async createUser(user:User){
   try {
    await baseDataBase.connection("lbn_user").insert({
        id: user.getId(),
        name: user.getName(),
        email:user.getEmail(),
        password: user.getPassword(),
        role :user.getRole(),

    });
   } catch (error: any) {
    throw new   Error(error.sqlMessage || error.message)
   }
}






    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await baseDataBase.connection('lbn_user')
            .select('*')
            .where({ email: email });
           return User.toUserModel(user[0]);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}
