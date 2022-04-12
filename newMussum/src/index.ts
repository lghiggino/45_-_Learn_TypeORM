import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./models/User";
import { Courses } from './models/Courses';

import app from "./app";

createConnection().then(async connection => {
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // const course = new Courses();
    // course.name = "TypeOrm 101";
    // course.description = "Intro to TypeORM";
    // course.hours = 120;
    // await connection.manager.save(course);
    // console.log("Saved a new user with id: " + course.id);

    // console.log("Loading courses from the database...");
    // const courses = await connection.manager.find(Courses);
    // console.log("Loaded users: ", courses);

    console.log("Here you can setup and run express/koa/any other framework.");

    app.listen(3000, () => {
        console.log(`Server running on port ${3000}`)
    });

}).catch(error => console.log(error));
