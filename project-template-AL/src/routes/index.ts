import { Router } from 'express';
import homeRouter from './home.routes';
import classRouter from './class.routes';
import contentRouter from './content.routes';

const routes = Router();

routes.use('/', homeRouter);

routes.use('/class', classRouter);
routes.use('/content', contentRouter);

export default routes;
