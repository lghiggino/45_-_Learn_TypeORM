import { Router } from 'express';
import homeRouter from './home.routes';
import classRouter from './class.routes';
import contentRouter from './content.routes';
import coursesRouter from './courses.routes';
import cnabRouter from './cnab.routes';

const routes = Router();

routes.use('/', homeRouter);
routes.use('/class', classRouter);
routes.use('/content', contentRouter);
routes.use('/courses', coursesRouter);
routes.use('/cnab', cnabRouter);

export default routes;
