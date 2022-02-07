import { Connection, createConnection } from "typeorm";
import { User } from "../src/models/User";
import { UsersService } from "../src/services/usersService";
import dotenv from "dotenv";
const envVariables = dotenv.config();

import typeORM from "../src/ConnectionHolder"


beforeAll(async () => {
    await typeORM.getConnectionTypeORM()
})

afterAll(async () => {
    await typeORM.close()
})

test("findAll", async () => {
    let userService = new UsersService
    const user = await userService.getAll()
    console.log(user)
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