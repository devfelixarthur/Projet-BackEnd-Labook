import { User } from "../types";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase{
    public static TABLE_USERS = "users"

    public async findUsers (q:string | undefined) : Promise<User[]> {
        let userDb
        if(q){
            const result: User[] = await BaseDataBase
            .connection(UserDataBase.TABLE_USERS)
            .where("name", "LIKE", `%${q}%`)

            userDb = result
        }else{
            const result: User[] = await BaseDataBase.connection(UserDataBase.TABLE_USERS)
            userDb = result
        }
        return userDb
    }

    public async insertUser (user: User): Promise<void>{
        await BaseDataBase.connection(UserDataBase.TABLE_USERS).insert(user)
    }
}