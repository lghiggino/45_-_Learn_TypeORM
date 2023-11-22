import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product.entity';
import { ProductRepository } from '../typeorm/repositories/Products.repository';
import AppError from '@shared/errors/AppError';

interface ShowProductDto {
  id: string;
}

export class ShowProductService {
  public async execute({ id }: ShowProductDto): Promise<Product | undefined> {
    const productsRepository = getCustomRepository(ProductRepository);
    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found');
    }

    return product;
  }
}
