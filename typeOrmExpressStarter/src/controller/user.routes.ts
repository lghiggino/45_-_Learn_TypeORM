import { Router } from 'express';
import { Request, Response } from "express"
import UserService from '../services/user.service';

const userRouter = Router();
const userService = new UserService;

userRouter.get("/", async function (req: Request, res: Response) {
    try {
        const users = await userService.getAll()
        res.json(users)
    } catch (error) {
        res.json(error)
    }

})

userRouter.get("/:id", async function (req: Request, res: Response) {
    try {
        const results = await userService.getById(req.params.id)
        if (!results) {
            return res.status(404).json(`User by id ${req.params.id} not found`)
        }
        return res.status(200).json(results)
    } catch (error) {
        res.json(error)
    }

})

userRouter.post("/", async function (req: Request, res: Response) {
    try {
        const results = await userService.createOne(req.body)
        return res.status(200).json(results)
    } catch (error) {
        res.json(error)
    }

})

userRouter.put("/:id", async function (req: Request, res: Response) {
    try {
        const results = await userService.updateOne(req.params.id, req.body)
        return res.status(200).json(results)
    } catch (error) {
        res.json(error)
    }
})

userRouter.delete("/:id", async function (req: Request, res: Response) {
    try {
        await userService.deleteOne(req.params.id)
        return res.status(200).json(`Sucessfully deleted user ${req.params.id}`)
    } catch (error) {
        return error
    }
})

export default userRouter;