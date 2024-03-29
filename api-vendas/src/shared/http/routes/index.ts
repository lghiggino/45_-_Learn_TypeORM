import { Router } from "express";
import { productsRouter } from "@modules/products/routes/products.routes";

const routes = Router();

routes.get("/", (request, response) => {
  return response.json({ message: "Hello World!" });
});

routes.use("/products", productsRouter);

export { routes };
