import { DataSource, getConnection, getRepository } from 'typeorm';
import myDataSource from '../../src/app-data-source'
import { User } from '../../src/entity/user.entity';
import UserService from '../../src/services/user.service'

const userService = new UserService;

beforeAll(async () => {
    await myDataSource.initialize()
})

afterAll(async () => {
    await myDataSource.destroy()
})


describe("userService test", () => {
    it("should be able to create a new user in the DataBase", async () => {
        let currentUsersCountBefore: User[] | undefined = await userService.getAll()
        if (!currentUsersCountBefore) {
            currentUsersCountBefore = []
        }
        const newUser = {
            firstName: "John",
            lastName: "Doe"
        }
        const createdNewUser = await userService.createOne(newUser)
        let currentUsersCountAfter: User[] | undefined = await userService.getAll()
        expect(currentUsersCountAfter?.length).toBe(currentUsersCountBefore?.length + 1)
    })

    it("should be able to receive a user by Id from the DataBase", async () => {
        const userById: User | null | undefined = await userService.getById("7")
        expect(userById?.id).toBe(7)
    })

    it("should get all users", async () => {
        let currentUsersCountBefore: User[] | undefined = await userService.getAll()
        const allUsers: User[] | undefined = await userService.getAll()
        if (currentUsersCountBefore && allUsers){
            expect(currentUsersCountBefore.length).toBe(allUsers.length)
        }
    })
})