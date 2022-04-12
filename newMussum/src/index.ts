import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./models/User";
import { Courses } from './models/Courses';

import app from "./app";

createConnection().then(async connection => {

    console.log("Here you can setup and run express/koa/any other framework.");

    app.listen(3000, () => {
        console.log(`Server running on port ${3000}`)
    });

}).catch(error => console.log(error));
