import { Router } from 'express';
import classRouter from './class.routes';
import contentRouter from './content.routes';
import teacherRouter from './teacher.routes';

const routes = Router();

routes.use('/class', classRouter);
routes.use('/content', contentRouter);
routes.use('/teacher', teacherRouter);

export default routes;