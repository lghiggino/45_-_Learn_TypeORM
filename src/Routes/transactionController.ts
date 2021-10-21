import express from "express"
import { Transaction } from "../Entities/Transaction"
import { Client } from "../Entities/Client"
const router = express.Router()

router.get("/api/transaction", async (req, res) => { })

router.post("/api/client/:clientId/transaction", async (req, res) => {
    const {
        amount,
        type
    } = req.body

    const { clientId } = req.params

    const client = await Client.findOne(parseInt(clientId))
    if(!client){
        res.json("Client not found")
    }

    const transaction = Transaction.create({
        amount,
        type,
        client
    })

    await transaction.save()
    return res.json(transaction)
})

export { router as transacitionController }