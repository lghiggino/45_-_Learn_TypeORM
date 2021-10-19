import express from "express"

const router = express.Router()

router.post("/api/client", (req, res) => {
    res.send("Hello")
})

export { router as createClientRouter }