import { Router } from 'express';
import userRouter from './user.routes';

const routes = Router();

// routes.use('/', homeRouter);
// routes.use('/health/', healthRouter);

console.log("puxou as rotas")
routes.use('/users', userRouter);


export default routes;
