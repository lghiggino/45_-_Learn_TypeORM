import { DataSource } from "typeorm"

const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "docker",
    database: "postgres",
    entities: ["src/entity/*.js"],
    logging: true,
    synchronize: true,
})

export default myDataSource