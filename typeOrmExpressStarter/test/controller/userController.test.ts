import axios from "axios"

const baseURL = "http://localhost:3000"

describe("UserController", () => {
    it("should get all users from the DB", async () => {
        const allUsers = await axios.get(`${baseURL}/users`)
        expect(allUsers?.data?.length).toBe(15)
    })

    it("should get one from the DB", async () => {
        const userWithId14 = await axios.get(`${baseURL}/users/14`)
        expect(userWithId14?.data).toEqual({
            id: 14,
            firstName: "Leonardo",
            lastName: "Ghiggino"
        })
    })
})