import express from "express"
import { getRepository, RepositoryNotFoundError } from "typeorm"
//entities
import { Client } from "../Entities/Client"
import { Banker } from "../Entities/Banker"
import { Transaction } from "../Entities/Transaction"

const router = express.Router()

router.get("/api/client", async (req, res) => {
    const clientRepository = getRepository(Client)
    const client = await clientRepository.find({ where: { firstName: "Leonardo" } })
    return res.json(client)
})

router.get("/api/client/:clientId/clientInfo", async (req, res) => {
    const { clientId } = req.params
    const client = await Client.findOne(clientId)
    if (!client) {
        res.json({ message: "unable to find Client" })
        return
    }
    res.json(client)
})

router.get("/api/client/:clientId/clientTransactions", async (req, res) => {
    const { clientId } = req.params
    const client = await Client.findOne(clientId)
    if (!client) {
        res.json({ message: "unable to find Client" })
        return
    }

    const clientTransactions: Transaction[] = await Transaction.find({ where: { client } })
    if (clientTransactions.length === 0) {
        res.json({ message: "unable to find Transactions for this client" })
        return
    }
    res.json(clientTransactions)
})

router.get("/api/client/:clientId/clientBankers", async (req, res) => {
    const { clientId } = req.params
    const client = await Client.findOne(clientId)
    if (!client) {
        res.json({ message: "unable to find Client" })
        return
    }

    const clientBankers: Banker[] = await Banker.find({ where: { client } })
    console.log(clientBankers)
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

router.delete("/api/client/:clientId/delete", async (req, res) => {
    const { clientId } = req.params

    const client = await Client.findOne(parseInt(clientId))
    try {
        await Client.delete(parseInt(clientId))
        res.json({message: `Client ${clientId} deleted successfully`})
    } catch (error) {
        res.json({message: `Error deleting Client ${clientId}`})
        throw new Error(error)
    }
    

})


export { router as clientController }