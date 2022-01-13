import express, { Response as ExResponse, Request as ExRequest, NextFunction } from "express"
import { createConnection } from "typeorm";
import swaggerUi from "swagger-ui-express";
import bodyParser from "body-parser"
import { RegisterRoutes } from "../build/routes"
import { ValidateError } from "tsoa";
import dotenv from "dotenv";
const envVariables = dotenv.config();
//entities
import { User } from "./entities/User";


(async () => {
    const connectionConfig = {
        type: "mysql",
        host: process.env.DB_HOST,
        port: +(process.env.DB_PORT || 3306),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [
            "entities/*.js"
        ],
        synchronize: true
    }

    try {
        await createConnection(
            connectionConfig as any
        )
        console.log("Connected to MySQL DB")

        const app = express()

        app.use(
            bodyParser.urlencoded({
                extended: true
            })
        )

        app.use(bodyParser.json())

        app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
            return res.send(
                swaggerUi.generateHTML(await import("../build/swagger.json"))
            )
        })

        RegisterRoutes(app)

        app.use(function notFoundHandler(_req, res: ExResponse) {
            res.status(404).send({
                message: "Not Found"
            })
        })

        app.use(function errorHandler(
            err: unknown,
            req: ExRequest,
            res: ExResponse,
            next: NextFunction
        ): ExResponse | void {
            if (err instanceof ValidateError) {
                console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
                return res.status(422).json({
                    message: "Validation Failed",
                    details: err?.fields,
                });
            }
            if (err instanceof Error) {
                return res.status(500).json({
                    message: "Internal Server Error",
                });
            }

            next();
        });

        const port = process.env.PORT || 3000;

        app.listen(port, () => {
            console.log(`Exemple app listening at http://localhost:${port}`)
        })
    }
    catch (error: any) {
        console.error(error.message)
        throw new Error("Unable to connect to MySQL DB")
    }

})()


