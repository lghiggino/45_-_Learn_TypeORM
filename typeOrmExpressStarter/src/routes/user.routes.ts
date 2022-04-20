import { Router } from 'express';
import { Request, Response } from "express"
import { User } from '../entity/user.entity';
import myDataSource from '../app-data-source';

const userRouter = Router();

userRouter.get("/", async function (req: Request, res: Response) {
    try {
        const users = await myDataSource.getRepository(User).find()
        res.json(users)
    } catch (error) {
        res.json(error)
    }

})

userRouter.get("/:id", async function (req: Request, res: Response) {
    try {
        const results = await myDataSource.getRepository(User).findOneBy({
            id: +req.params.id,
        })
        return res.send(results)
    } catch (error) {
        res.json(error)
    }

})

userRouter.post("/", async function (req: Request, res: Response) {
    try {
        const user = await myDataSource.getRepository(User).create(req.body)
        const results = await myDataSource.getRepository(User).save(user)
        return res.send(results)
    } catch (error) {
        res.json(error)
    }

})

userRouter.put("/:id", async function (req: Request, res: Response) {
    try {
        const user = await myDataSource.getRepository(User).findOneBy({
            id: +req.params.id,
        })
        if (!user) {
            return res.json("user can not be null")
        }
        myDataSource.getRepository(User).merge(user, req.body)
        const results = await myDataSource.getRepository(User).save(user)
        return res.send(results)
    } catch (error) {
        res.json(error)
    }
})

userRouter.delete("/:id", async function (req: Request, res: Response) {
    try {
        await myDataSource.getRepository(User).delete(req.params.id)
        return res.json(`Sucessfully deleted user ${req.params.id}`)
    } catch (error) {
        return res.json(error)
    }

})

export default userRouter;
