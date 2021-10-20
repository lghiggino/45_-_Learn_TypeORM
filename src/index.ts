import { createConnection } from "typeorm"
import express from "express"
require("dotenv").config()

//entities
import { Client } from "./Entities/Client"
import { Banker } from "./Entities/Banker"
import { Transaction } from "./Entities/Transaction"
//routers + controllers
import { clientController } from "./Routes/clientController"
import { bankerController } from "./Routes/bankerController"
import { transacitionController } from "./Routes/transactionController"

const app = express()

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
        //middleware
        app.use(express.json())
        //routers
        app.use(clientController)
        app.use(bankerController)
        app.use(transacitionController)

        app.listen(8080, () => {
            console.log(`Express running on port 8080`)
        })

    } catch (error) {
        console.log(error)
        throw new Error("Unable to connect to DB")
    }
}

main()