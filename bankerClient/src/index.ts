import "reflect-metadata"
import { createConnection } from "typeorm"
import express, { application } from "express"
require("dotenv").config()

import { Client } from "./entities/Client"
import { Banker } from "./entities/Banker"
import { Transaction } from "./entities/Transaction"
import { Account } from "./entities/Account"

//routers
import { clientRouter } from "./routes/clientController"
import { bankRouter } from "./routes/bankController"
import { transactionRouter } from "./routes/transactionController"
import { bankToClientController } from "./routes/bankToClientController"

const app = express()

const main = async () => {
    try {
        const connection = await createConnection(
            {
                type: "postgres",
                host: `${process.env.DB_HOST}`,
                port: Number(process.env.DB_PORT),
                username: `${process.env.DB_USERNAME}`,
                password: `${process.env.DB_PASSWORD}`,
                database: `${process.env.DB_NAME}`,
                entities: [
                    Client,
                    Banker,
                    Transaction,
                    Account
                ],
                synchronize: true
            }
        )
        console.log("Connected to Postgres")

        app.use(express.json())
        app.use(clientRouter)
        app.use(bankRouter)
        app.use(transactionRouter)
        app.use(bankToClientController)

        app.listen(8080, () => {
            console.log("API running on port 8080")
        })


    } catch (error) {
        console.error(error.message)
        throw new Error("Unable to connect to Postgres DB")
    }
}

main() 