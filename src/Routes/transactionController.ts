import express from "express"
import { Transaction } from "../Entities/Transaction"
const router = express.Router()

router.get("/api/transaction", async (req, res) => { })

router.post("/api/transaction", async (req, res) => {
    const {
        amount,
        type,
        client
    } = req.body

    const transaction = Transaction.create({
        amount,
        type,
        client
    })

    await transaction.save()
    return res.json(transaction)
})

export { router as transacitionController }