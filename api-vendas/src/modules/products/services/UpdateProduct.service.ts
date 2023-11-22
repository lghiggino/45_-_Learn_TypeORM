import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product.entity';
import { ProductRepository } from '../typeorm/repositories/Products.repository';
import AppError from '@shared/errors/AppError';

interface UpdateProductDto {
  id: string;
  name?: string;
  price?: number;
  quantity?: number;
}

export class UpdateProductService {
  public async execute({
    id,
    name,
    price,
    quantity,
  }: UpdateProductDto): Promise<Product | undefined> {
    const productsRepository = getCustomRepository(ProductRepository);
    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found');
    }

    if (name) {
      const productExists = await productsRepository.findByName(name);
      if (productExists && name !== product.name) {
        throw new AppError('There is already a product with this name');
      }
    }

    if (name) product.name = name;
    if (price) product.price = price;
    if (quantity) product.quantity = quantity;

    await productsRepository.save(product);

    return product;
  }
}
