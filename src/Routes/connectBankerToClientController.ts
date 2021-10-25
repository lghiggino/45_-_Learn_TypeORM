import express from "express"
import { Client } from "../Entities/Client"
import { Banker } from "../Entities/Banker"
const router = express.Router()


router.post("/api/banker/:bankerId/client/:clientId/connect", async (req, res) => {
    const { bankerId, clientId } = req.params

    const client = await Client.findOne(parseInt(clientId))
    const banker = await Banker.findOne(parseInt(bankerId))

    if (!client) {
        res.json({ message: "unable to find client" })
        return
    }
    if (!banker) {
        res.json({ message: "unable to find banker" })
        return
    }

    //can only populate the column of the Entity that has the @JoinColumn() - in this case Banker
    banker.clients = [client]


    await banker.save()
    res.json({ message: `Connected banker ${bankerId} to client ${clientId}` })
})


export { router as connectBankerToClientController }