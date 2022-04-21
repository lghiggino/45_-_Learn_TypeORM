import myDataSource from '../../src/app-data-source'
import UserService from '../../src/services/user.service'

const userService = new UserService;

beforeAll(async () => {
    await myDataSource.initialize()
})

afterAll(async () => {
    await myDataSource.destroy()
})

describe("userService test", () => {
    it("should be able to receive all users from the DataBase", async () => {
        const allUsers = await userService.getAll()
        console.log("allUsers >>>", allUsers)
        expect(allUsers?.length).toBe(15)
    })
})