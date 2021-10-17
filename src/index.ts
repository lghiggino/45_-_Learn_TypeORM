import { createConnection } from "typeorm"
require('dotenv').config()

import { Client } from "./Entities/Client"
import { Banker } from "./Entities/Banker"
import { Transaction } from "./Entities/Transaction"

const main = async () => {
    try {
        const connection = await createConnection(
            {
                type: "postgres",
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: [
                    Client,
                    Banker,
                    Transaction
                ],
                synchronize: true
            }
        )
        console.log(`Connected to Postgress at database: ${connection.options.database}`)
    } catch (error) {
        console.log(error)
        throw new Error("Unable to connect to DB")
    }
}

main()