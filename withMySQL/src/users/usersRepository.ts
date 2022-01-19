import { getRepository, getConnection } from "typeorm";
import { User } from "../entities/User";


export type UserCreationParams = Pick<User, "email" | "firstName" | "lastName" | "phoneNumbers">

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
            firstName,
            lastName,
            phoneNumbers
        } = userCreationParams

        const user = User.create({
            email,
            firstName,
            lastName,
            phoneNumbers
        })

        await user.save()

        return user
    }

    public async deleteById(userId: number) {
        const user = await getRepository(User).findOneOrFail(userId)
        User.remove(user)

        return `deleted user with id: ${userId} from User`
    }






}