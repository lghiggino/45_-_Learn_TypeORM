import "reflect-metadata"
import { createConnection } from "typeorm"
require("dotenv").config()

//Entities
import { Client } from "./entities/Client"
const main = async () => {
    try {
        await createConnection({
            type: "mysql",
            host: "localhost",
            port: Number(process.env.DB_PORT),
            username: `${process.env.DB_USERNAME}`,
            password: `${process.env.DB_PASSWORD}`,
            database: `${process.env.NAME}`,
            synchronize: true,
            logging: false,
            entities: [
                Client
            ],
        })

        console.log(`Connect to mySql DB at port ${Number(process.env.DB_PORT)}`)
    } catch (error) {
        console.error(error)
        throw new Error("Unable to Connect to mySql DB")
    }
}

main()