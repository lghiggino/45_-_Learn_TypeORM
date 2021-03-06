import myDataSource from "../app-data-source";
import { User, UserCreationParams } from "../entity/user.entity";


export default class UserRepository {
    public async getAll() { 
        try {
            const allUsers: User[] = await myDataSource.getRepository(User).find()
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
        try {
            return await myDataSource.getRepository(User).findOneByOrFail({
                id: Number(id),
            })
        } catch (error) {
            console.error("UserRepository Error @getById", error)
        }
    }

    public async createOne(userParams: UserCreationParams) {
        try {
            const user = await myDataSource.getRepository(User).create(userParams)
            const results = await myDataSource.getRepository(User).save(user)
            return results
        } catch (error) {
            console.error("UserRepository Error @createUser", error)
        }
    }

    public async updateOne(id: string, body: any) {
        try {
            const user = await myDataSource.getRepository(User).findOneByOrFail({
                id: +id,
            })
            myDataSource.getRepository(User).merge(user, body)
            return await myDataSource.getRepository(User).save(user)
        } catch (error) {
            console.error("UserRepository Error @updateOne", error)
        }
    }

    public async deleteOne(id: string) {
        try {
            return await myDataSource.getRepository(User).delete(id)
        } catch (error) {
            console.error("UserRepository Error @deleteOne", error)
        }
    }
}