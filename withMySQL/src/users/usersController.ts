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
    ValidateError
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
    @Get("{userId}")
    public async getUser(
        @Path() userId: number,
        @Query() name?: string
    ): Promise<User> {
        console.log("bateu aqui dentro")
        return usersService.get(userId, name)
    }

    @Response<ValidateErrorJSON>(422, "Validation Failed")
    @SuccessResponse("201", "Created user")
    @Post()
    public async createUser(
        @Body() requestBody: UserCreationParams
    ): Promise<void> {
        this.setStatus(201)
        usersService.create(requestBody)
        return
    }
}