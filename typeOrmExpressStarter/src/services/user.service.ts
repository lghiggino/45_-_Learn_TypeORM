import { json } from "stream/consumers";
import myDataSource from "../app-data-source";
import { User, UserCreationParams } from "../entity/user.entity";
import UserRepository from "../repository/user.repository";

const userRepository = new UserRepository()

export default class UserService {

    public async getAll() {
        try {
            const allUsers: User[] | undefined = await userRepository.getAll()
            if (!allUsers) {
                return []
            } else {
                return allUsers
            }
        } catch (error) {
            console.error("UserService Error @getAllUsers", error)
        }
    }

    public async getById(id: string) {
        if (Number.isNaN(Number(id))) {
            console.error("id is not a number")
            return
        }
        try {
            return await userRepository.getById(id)
        } catch (error) {
            console.error("UserService Error @getById", error)
        }
    }

    public async createOne(userParams: UserCreationParams) {
        try {
            const user = await myDataSource.getRepository(User).create(userParams)
            const results = await myDataSource.getRepository(User).save(user)
            return results
        } catch (error) {
            console.error("UserService Error @createUser", error)
        }
    }

    public async updateOne(id: string, body: any) {
        if (Number.isNaN(Number(id))) {
            return
        }
        try {
            const user = await myDataSource.getRepository(User).findOneBy({
                id: +id,
            })
            if (!user) {
                return "user can not be null"
            }
            myDataSource.getRepository(User).merge(user, body)
            return await myDataSource.getRepository(User).save(user)
        } catch (error) {
            console.error("UserService Error @updateOne", error)
        }
    }

    public async deleteOne(id: string) {
        console.log(id, typeof id)
        if (Number.isNaN(Number(id))) {
            console.log("entrou no if")
            throw new Error("Invalid id")
        }
        try {
            await myDataSource.getRepository(User).delete(id)
        } catch (error) {
            console.error("UserService Error @deleteOne", error)
        }
    }


}