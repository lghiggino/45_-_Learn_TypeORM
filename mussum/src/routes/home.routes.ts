import { Router } from 'express';

const homeRouter = Router();

homeRouter.get('/', async (request, response) => {
  response.status(200).json('Hello from home');
});

export default homeRouter;