import { DataSource } from "typeorm"

console.log(process.env.NODE_ENV)

const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: process.env.PASSWORD,
    database: "postgres",
    entities: [
        process.env.NODE_ENV = "dev" ?
            "src/entity/*.entity.ts"
            :
            "entity/*.entity.js"
    ],
    logging: true,
    synchronize: true,
    // ssl: true,
    // extra: {
    //    ssl: {
    //       rejectUnauthorized: false
    //    }
    // }
})

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized [1]")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization [1]", err)
    })

export default myDataSource