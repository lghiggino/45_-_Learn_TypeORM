import express from "express"
import { Banker } from "../Entities/Banker"
const router = express.Router()

router.get("/api/banker", async (req, res) => {})

router.post("/api/banker", async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        employeeNumber,
        institutionName
    } = req.body

    const banker = Banker.create({
        firstName,
        lastName,
        email,
        cardNumber,
        employeeNumber,
        institutionName
    })

    await banker.save()
    return res.json(banker)
})

export { router as bankerController }