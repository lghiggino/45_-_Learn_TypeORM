import { getRepository } from "typeorm";
import { User } from "../entities/User";


export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">

export class UsersService {
    public async get(id: number): Promise<User> {
        const userRepository = getRepository(User)
        const user = await userRepository.findOneOrFail(id)
        return user
    }

    public create(userCreationParams: UserCreationParams): User {
        return {
            id: Math.floor(Math.random() * 10000),
            ...userCreationParams
        }
    }
}