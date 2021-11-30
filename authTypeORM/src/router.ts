import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    res.json("hello, banana")
})

export default routes;