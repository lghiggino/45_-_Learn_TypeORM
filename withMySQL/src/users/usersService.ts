import { getRepository } from "typeorm";
import { User } from "../entities/User";


export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">

export class UsersService {
    public async get(id: number): Promise<User> {
        const userRepository = getRepository(User)
        const user = await userRepository.findOneOrFail(id)
        return user
    }

    public async create(userCreationParams: UserCreationParams): Promise<User> {
        console.log("NA ROTA POST O QUE CHEGA É: ", userCreationParams)
        const {
            email,
            name,
            phoneNumbers
        } = userCreationParams

        const user = User.create({
            email,
            name,
            phoneNumbers
        })

        await user.save()

        return user
    }
}