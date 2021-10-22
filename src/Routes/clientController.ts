import express from "express"
import { getRepository } from "typeorm"
import { Client } from "../Entities/Client"
import { Transaction } from "../Entities/Transaction"
const router = express.Router()

router.get("/api/client", async (req, res) => {
    const clientRepository = getRepository(Client)
    const client = await clientRepository.find({ where: { firstName: "Leonardo" } })
    return res.json(client)
})

router.get("/api/client/:clientId/clientInfo", async (req, res) => { 
    const {clientId} = req.params
    const client = await Client.findOne(clientId)
    if (!client){
        res.json({message: "unable to find Client"})
        return
    }
    res.json(client)
})

router.get("/api/client/:clientId/clientTransactions", async (req, res) => { 
    const {clientId} = req.params
    const client = await Client.findOne(clientId)
    if (!client){
        res.json({message: "unable to find Client"})
        return
    }

    const clientTransactions = await Transaction.find({where: {client}})
    if (!client){
        res.json({message: "unable to find Transactions for this client"})
        return
    }
    res.json(clientTransactions)
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