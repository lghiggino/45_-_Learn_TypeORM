import { Request, Response } from "express";
import { ListProductService } from "../services/ListProduct.service";
import { CreateProductService } from "../services/CreateProduct.service";

export default class ProductsController {
    public async index(request: Request, response: Response){
        try {
            const createProduct= new CreateProductService();

            const { name, price, quantity } = request.body

            const product = await createProduct.execute({name, price, quantity}); 

            console.log(`sucesso ao criar produto ${name}`)
            return response.json(product);
        } catch (error: any) {
            console.error('erro ao criar produto')
            throw Error(error.message)
        }
        
    }
}