import { Connection, createConnection } from "typeorm";
import { User } from "../src/entities/User";
import { UsersService } from "../src/users/usersService";
import dotenv from "dotenv";
const envVariables = dotenv.config();


beforeAll(async () => {
    await createConnection(
        {
            type: "mysql",
            host: "localhost",
            port: +(process.env.DB_PORT || 3306),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [
                User
            ],
            synchronize: true
        }
    )
})

afterAll(() => {
    
})

test("teste do usersservice GET by ID", async () => {
    let userService = new UsersService
    const user = await userService.get(1)
    console.log(user)
    expect(user).toStrictEqual({
        "email": "fabio.oshiro@calindra.com.br",
        "id": 1,
        "name": "Fabio Oshiro",
        "phoneNumbers": [
            "(21) 987654321",
           ],
    }
    )
})