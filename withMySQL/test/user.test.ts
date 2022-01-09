import { UsersController } from "../src/users/usersController"

describe("user test", () => {
    it("should be able to post a new user", async () => {
        let userController = new UsersController()
        let newUser = await userController.createUser({
            "email": "leonardo.ghiggino@calindra.com.br",
            "name": "Leonardo Ghiggino",
            "phoneNumbers": ["(21)984432508"]
        })
        console.log(newUser)
    })
})