import { Router } from 'express';
import ProductsController from '../controllers/Products.controller';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post('/', (request, response) => {
  return productsController.index(request, response);
});

export { productsRouter };
