import express from "express";
import { Banker } from "../entities/Banker";
import { Client } from "../entities/Client";

const router = express.Router()

router.put("/api/banker/:bankerId/client/:clientId/transaction", async (req, res) => {
    const { bankerId, clientId } = req.params

    const banker = await Banker.findOne(bankerId)
    const client = await Client.findOne(clientId)

    if (!banker || !client) {
        return res.json({ message: "banker or client not found" })
    }

    banker.clients.push(client)

    await banker.save()

    return res.json({ message: "Banker connected to Client" })

})

export { router as bankToClientRouter }