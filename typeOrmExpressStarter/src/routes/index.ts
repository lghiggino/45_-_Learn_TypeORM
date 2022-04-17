import { Router } from 'express';
import userRouter from './user.routes';

const routes = Router();

// routes.use('/', homeRouter);
// routes.use('/health/', healthRouter);

routes.use('/users', userRouter);


export default routes;
