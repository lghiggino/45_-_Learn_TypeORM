import { Router } from 'express';
import homeRouter from './home.routes';
import classRouter from './class.routes';

const routes = Router();

routes.use('/', homeRouter);
routes.use('/class', classRouter);

export default routes;
