import { Router } from 'express';
import homeRouter from './home.routes';
import userRouter from './user.routes';

const routes = Router();


// routes.use('/health/', healthRouter);

routes.use('/', homeRouter);
routes.use('/users', userRouter);


export default routes;
