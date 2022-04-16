import { DataSource } from "typeorm"

console.log(process.env.NODE_ENV)

const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "docker",
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

//dist/**/*.entity.js

export default myDataSource