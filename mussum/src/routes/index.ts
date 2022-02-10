import { Router } from 'express';
import classRouter from './class.routes';
import homeRouter from './home.routes';

const routes = Router();

routes.use('/', homeRouter);
routes.use('/class', classRouter);

export default routes;
