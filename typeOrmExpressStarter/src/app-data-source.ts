import dotenv from 'dotenv';
import { DataSource } from "typeorm"

dotenv.config()

console.log(`current env is: ${process.env.NODE_ENV}`)

const devDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: process.env.PASSWORD,
    database: "postgres",
    entities: ["src/entity/*.entity.ts"],
    logging: true,
    synchronize: true,
})

const testDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: process.env.PASSWORD,
    database: "test",
    entities: ["src/entity/*.entity.ts"],
    logging: true,
    synchronize: true,
})

const prodDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5455,
    username: "postgres",
    password: process.env.PASSWORD,
    database: "postgres",
    entities: ["entity/*.entity.js"],
    logging: true,
    synchronize: true,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

const currentEnv = process.env.NODE_ENV

const myDataSource = currentEnv === "test" ? testDataSource :
    currentEnv === "dev" ? devDataSource :
        prodDataSource

console.log(currentEnv, myDataSource.options)

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized [1]")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization [1]", err)
    })

export default myDataSource