import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    Response,
    SuccessResponse,
    ValidateError,
    Example,
    Delete
} from "tsoa"

import { User } from "./user"
import { UsersService, UserCreationParams } from "./usersService"

const usersService = new UsersService

interface ValidateErrorJSON {
    message: "Validation failed";
    details: { [name: string]: unknown };
}

@Route("users")
export class UsersController extends Controller {
    /**
    * Retrieves the details of an existing user.
    * Supply the unique user ID from either and receive corresponding user details.
    */
    @Example<User>({
        id: 1,
        firstName: "tsoaUser",
        lastName: "from example",
        email: "hello@tsoa.com",
        phoneNumbers: [],
    })

    @Get("/id/{userId}")
    public async getUser(@Path() userId: number): Promise<User> {
        return await usersService.get(userId)
    }

    @Get("/name/:username")
    public async getUserByName(@Path() username: string): Promise<User> {
        return await usersService.getByName(username)
    }

    /**
    * Creates a new user.
    */
    @Response<ValidateErrorJSON>(422, "Validation Failed")
    @SuccessResponse("201", "Created user")
    @Post()
    public async createUser(@Body() requestBody: UserCreationParams): Promise<User> {
        return await usersService.create(requestBody)
    }

    
}