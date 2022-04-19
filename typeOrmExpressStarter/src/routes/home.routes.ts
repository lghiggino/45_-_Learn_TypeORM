import { Router } from 'express';
import { Request, Response } from "express"
import myDataSource from '../app-data-source';

const homeRouter = Router();

homeRouter.get("/", (req: Request, res: Response) => {
    res.json("Hello from home")
})

export default homeRouter;