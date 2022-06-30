import { User } from "../entities/user";
import { baseDataBase } from "./baseDataBase";

export class UserDataBase extends baseDataBase {
    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await baseDataBase.connection('lbn_user')
            .select('*')
            .where({ email: email });
           return User.toUserModel(user[0]);
        } catch (error: any) {
            throw new error(error.sqlMessage || error.message)
        }
    }

}
