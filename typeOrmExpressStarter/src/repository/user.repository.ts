import myDataSource from "../app-data-source";
import { User, UserCreationParams } from "../entity/user.entity";


export default class UserRepository {

    public async getAll() { 
        try {
            const allUsers: User[] | undefined = await myDataSource.getRepository(User).find()
            if (!allUsers) {
                return []
            } else {
                return allUsers
            }
        } catch (error) {
            console.error("UserRepository Error @getAllUsers", error)
        }
    }

    public async getById(id: string){
        if (Number.isNaN(Number(id))) {
            return
        }
        try {
            return await myDataSource.getRepository(User).findOneBy({
                id: Number(id),
            })
        } catch (error) {
            console.error("UserRepository Error @getById", error)
        }
    }

}