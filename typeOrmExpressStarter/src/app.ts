import dotenv from 'dotenv';
import 'reflect-metadata';
import express from "express"
import routes from "./routes"

dotenv.config();

// create and setup express app
const app = express()
app.use(express.json())

//register routes
app.use(routes)

// start express server
app.listen(3000)
console.log('listening on port 3000')
