import express from "express"
import { Client } from "../entities/Client";
import { Transaction, TransactionTypes } from "../entities/Transaction"

const router = express.Router()

router.get("/api/client/:clientId/transaction", async (req, res) => {
    const { clientId } = req.params
    const client = await Client.findOne(parseInt(clientId))
    if (!client) {
        res.json({ message: "Client not found" })
        return
    }

    const clientTransactions: Transaction[] = await Transaction.find({ where: { clientId: clientId } })
    console.log(clientTransactions)
})

router.post("/api/client/:clientId/transaction", async (req, res) => {
    const { clientId } = req.params
    const { type, amount } = req.body;

    const client = await Client.findOne(parseInt(clientId))

    if (!client) {
        return res.json({ message: "client not found" })
    }

    const transaction = Transaction.create({
        amount,
        type,
        client
    })

    await transaction.save()

    if (type === TransactionTypes.DEPOSIT) {
        client.balance = client.balance + amount
    } else if (type === TransactionTypes.WITHDRAW) {
        if (client.balance < amount) {
            return res.json({ message: "Transaction funds unavailable" })
        }
        client.balance = client.balance - amount
    }

    await client.save()

    return res.json({ message: "transaction added" })

})


export { router as transactionRouter }