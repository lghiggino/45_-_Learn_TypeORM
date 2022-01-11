import { getRepository } from "typeorm";
import { User } from "../entities/User";


export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">

export class UsersRepository {
    public async findOne(username: string) {
        const userRepository = getRepository(User)
        const user = await userRepository.findOneOrFail({ where: { name: username } })
        return user
    }

    public async getById(id: number) {
        const userRepository = getRepository(User)
        const user = await userRepository.findOneOrFail(id)
        return user
    }

    public async create(userCreationParams: UserCreationParams): Promise<User> {
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