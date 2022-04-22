import { getConnection, getRepository } from 'typeorm';
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

async function clearDB() {
    const entities = await (await myDataSource.initialize()).entityMetadatas;

    console.log("entities >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", entities)

    for (const entity of entities) {
      const repository = myDataSource.getRepository(entity.name);
      await repository.query(`TRUNCATE ${entity.tableName} RESTART IDENTITY CASCADE;`);
    }
  }

afterEach(async () => {
    await clearDB()
});


describe("userService test", () => {
    it("should be able to create a new user in the DataBase", async () => {
        const newUser = {
            firstName: "John",
            lastName: "Doe"
        }
        const createdNewUser = await userService.createOne(newUser)
        expect(createdNewUser?.id).toBe(1)
    })

    it("should be able to receive all users from the DataBase", async () => {
        const allUsers = await userService.getAll()
        console.log("allUsers >>>", allUsers)
        expect(allUsers?.length).toBe(1)
    })
})