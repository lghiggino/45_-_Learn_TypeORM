import express from "express"
import { Client } from "../Entities/Client"
const router = express.Router()

router.get("/api/client", async (req, res) => {
    res.send("Hello, Im the response for /api/client GET route")
})

router.post("/api/client", async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        balance
    } = req.body

    const client = Client.create({
        firstName,
        lastName,
        email,
        cardNumber,
        balance
    })

    await client.save()
    return res.json(client)

})


export { router as createClientRouter }