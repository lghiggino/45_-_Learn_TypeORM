import express from "express"
import { Transaction } from "../Entities/Transaction"
import { TransactionTypes } from "../Entities/Transaction"
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
    if (!client) {
        res.json({ message: "Client not found" })
        return
    }

    const transaction = Transaction.create({
        amount,
        type,
        client //passes the whole client
    })

    await transaction.save()

    if (type === TransactionTypes.DEPOSIT) {
        client.balance = +client.balance + amount
    } else if (type === TransactionTypes.WITHDRAW && client.balance >= amount) {
        client.balance = +client.balance - amount
    } else {
        return res.json({ message: "Unable to complete the transaction - funds unavailable" })
    }
    await client.save()
    return res.json({ message: "Transaction concluded" })
})

export { router as transacitionController }