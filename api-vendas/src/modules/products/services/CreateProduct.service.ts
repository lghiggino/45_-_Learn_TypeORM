import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product.entity';
import { ProductRepository } from '../typeorm/repositories/Products.repository';
import AppError from '../../../shared/errors/AppError';

interface CreateProductDTO {
  name: string;
  price: number;
  quantity: number;
}

export class CreateProductService {
  public async execute({ name, price, quantity }: CreateProductDTO): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const productExists = await productsRepository.findByName(name);
    if (productExists) {
      throw new AppError('There is already a product with this name');
    }

    const product = productsRepository.create({ name, price, quantity });
    return await productsRepository.save(product);
  }
}
