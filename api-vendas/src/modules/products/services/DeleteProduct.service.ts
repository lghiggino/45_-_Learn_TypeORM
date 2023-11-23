import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product.entity';
import { ProductRepository } from '../typeorm/repositories/Products.repository';
import AppError from '@shared/errors/AppError';

interface DeleteProductDto {
  id: string;
}

export class DeleteProductService {
  public async execute({ id }: DeleteProductDto): Promise<void> {
    const productsRepository = getCustomRepository(ProductRepository);
    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found');
    }

    await productsRepository.remove(product);
  }
}
