import express from "express";
import { getRepository, RepositoryNotFoundError, createQueryBuilder } from "typeorm"
//entities
import { Client } from "../entities/Client";
import { Banker } from "src/entities/Banker";
import { Transaction } from "src/entities/Transaction";

const router = express.Router();

router.get("/api/client", async (req, res) => {
    const clientRepository = getRepository(Client)
    const client = await clientRepository.find({ where: { firstName: "Leonardo" } })
    return res.json(client)
})

router.get("/api/client/:clientId/clientInfo", async (req, res) => {
    const { clientId } = req.params
    const client = await Client.findOne(clientId)
    if (!client) {
        return res.json({ message: `Unable to find Client by id ${clientId}` })
    }
    return res.json(client)
});

router.get("/api/client/:clientId/clientTransactions", async (req, res) => {
    const { clientId } = req.params
    const client = await Client.findOne(clientId)
    if (!client) {
        return res.json({ message: `Unable to find Client by id ${clientId}` })
    }

    const clientTransactions: Transaction[] = await Transaction.find({ where: { client } })
    if (clientTransactions.length === 0) {
        res.json({ message: "Unable to find Transactions for this client" })
        return
    }
    return res.json(clientTransactions)
})

router.get("/api/client/:clientId/clientBankers", async (req, res) => {
    const { clientId } = req.params
    const client = await Client.findOne(clientId)
    if (!client) {
        return res.json({ message: `Unable to find Client by id ${clientId}` })
    }

    const clientBankers: Banker[] = await Banker.find({where: {client}})
    if (clientBankers.length === 0) {
        res.json({ message: "Unable to find Bankers for this client" })
        return
    }
    return res.json(clientBankers)
})

router.get("/api/client/:clientId/familyMembers", async (req, res) => {
    try {
        const { clientId } = req.params

        const client = await createQueryBuilder('client')
            .select('client.familyMembers')
            .from(Client, 'client')
            .where('client.id = :clientId', { clientId })
            .getOne()

        console.log(client)

        return res.json(client)
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" })
    }

})

router.get("/api/client/:cardNumber", async (req, res) => {
    const { cardNumber } = req.params
    const client = Client.findOne(
        {
            where: {
                cardNumber: cardNumber
            }
        }
    )
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
});

router.delete("/api/client/:clientId/delete", async (req, res) => {
    const { clientId } = req.params
    try {
        await Client.delete(parseInt(clientId))
        res.json({ message: `Client ${clientId} deleted successfully` })
    } catch (error) {
        res.json({ message: `Error deleting Client ${clientId}` })
        throw new Error(error)
    }


})

export { router as clientRouter }