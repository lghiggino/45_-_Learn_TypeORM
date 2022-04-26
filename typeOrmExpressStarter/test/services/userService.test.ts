import { DataSource, getConnection, getRepository } from 'typeorm';
import myDataSource from '../../src/app-data-source'
import { User } from '../../src/entity/user.entity';
import UserService from '../../src/services/user.service'

const userService = new UserService;

beforeAll(async () => {
    await myDataSource.initialize()
    const allUsers: User[] | undefined = await userService.getAll()
    if (allUsers) {
        allUsers.forEach(async (user) => {
            await userService.deleteOne(`${user.id}`)
        })
    }
})

beforeEach(async () => {
    
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
        const newUser = {
            firstName: "John",
            lastName: "Doe"
        }
        const newCreatedUser = await userService.createOne(newUser)
        const userById: User | null | undefined = await userService.getById(`${newCreatedUser!.id}`)
        expect(userById?.id).toBe(newCreatedUser!.id)
    })

    it("should get all users", async () => {
        let currentUsersCountBefore: User[] | undefined = await userService.getAll()
        const allUsers: User[] | undefined = await userService.getAll()
        if (currentUsersCountBefore && allUsers) {
            expect(currentUsersCountBefore.length).toBe(allUsers.length)
        }
    })

    it("should update an existing user", async () => {
        const user = {
            firstName: 'Joe',
            lastName: 'Does'
        }
        const createdNewUser = await userService.createOne(user)
        const altered = {
            firstName: 'April',
            lastName: 'Summer'
        }
        const alteredUser = await userService.updateOne(`${createdNewUser!.id}`, altered)
        expect(alteredUser!.id).toBe(createdNewUser!.id)
        expect(alteredUser!.firstName).toBe('April')
    })

    it("should delete a user", async () => {
        const userBefore = await userService.getById("8")
    })
})