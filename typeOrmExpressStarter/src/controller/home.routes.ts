import { Router } from 'express';
import { Request, Response } from "express"
import myDataSource from '../app-data-source';

const homeRouter = Router();

homeRouter.get("/", (req: Request, res: Response) => {
    try {
        res.json("Hello from home")
    } catch (error) {
        res.json(error)
    }
    
})

export default homeRouter;