import { Router } from 'express';
import { Request, Response } from "express"
import { User } from '../entity/user.entity';
import myDataSource from '../app-data-source';

const userRouter = Router();

userRouter.get("/", async function (req: Request, res: Response) {
    const users = await myDataSource.getRepository(User).find()
    res.json(users)
})

userRouter.get("/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(User).findOneBy({
        id: +req.params.id,
    })
    return res.send(results)
})

userRouter.post("/", async function (req: Request, res: Response) {
    const user = await myDataSource.getRepository(User).create(req.body)
    const results = await myDataSource.getRepository(User).save(user)
    return res.send(results)
})

userRouter.put("/:id", async function (req: Request, res: Response) {
    const user = await myDataSource.getRepository(User).findOneBy({
        id: +req.params.id,
    })
    if (!user) {
        return res.json("user can not be null")
    }
    myDataSource.getRepository(User).merge(user, req.body)
    const results = await myDataSource.getRepository(User).save(user)
    return res.send(results)
})

userRouter.delete("/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(User).delete(req.params.id)
    return res.send(results)
})

export default userRouter;
