import express from "express";
import { Banker } from "../entities/Banker";

const router = express.Router();

router.get("/api/banker/:id", async (req, res) => {
    const { id } = req.body
    const banker = await Banker.findOne(id)
    return res.json(banker)
});


router.post("/api/banker", async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        employeeNumber
    } = req.body

    const banker = Banker.create({
        firstName,
        lastName,
        email,
        cardNumber,
        employeeNumber
    })

    await banker.save()

    return res.json(banker)

});


export { router as bankRouter}