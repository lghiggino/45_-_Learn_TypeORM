import express from "express"
import { getRepository } from "typeorm"
import { Client } from "../Entities/Client"
const router = express.Router()

router.get("/api/client", async (req, res) => {
    const clientRepository = getRepository(Client)
    const client = await clientRepository.find({ where: { firstName: "Leonardo"}})
    return res.json(client)
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


export { router as clientController }