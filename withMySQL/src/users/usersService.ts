import { User } from "../entities/User";
import { UsersRepository } from "./usersRepository";

export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">

const usersRepository = new UsersRepository

export class UsersService {
    public async getByName(username: string): Promise<User> {
        const user = await usersRepository.findOne(username)
        return user
    }

    public async get(id: number): Promise<User> {
        const user = await usersRepository.getById(id)
        return user
    }

    public async create(userCreationParams: UserCreationParams): Promise<User> {
        const user = await usersRepository.create(userCreationParams)
        return user
    }
}