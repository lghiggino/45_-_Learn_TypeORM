import { Connection, createConnection } from "typeorm";
import { User } from "../src/models/User";
import { HealthService } from "../src/services/healthService";
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
            database: process.env.DB_TEST,
            entities: [
                User
            ],
            synchronize: true
        }
    )
})

afterAll(() => {
    
})

test("teste do healthService GET by ID", async () => {
    let healthService = new HealthService
    const health = await healthService.health()
    console.log(health)
    expect(health).toStrictEqual({
        'message': 'I am Health',
        'startup': '',
        'buildDate': '',
        'commitHash': ''
    })
})

