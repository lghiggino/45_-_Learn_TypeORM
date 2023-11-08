import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product.entity';
import { ProductRepository } from '../typeorm/repositories/Products.repository';
import AppError from '../../../shared/errors/AppError';

interface FindByPriceRangeDTO {
  minPrice: number;
  maxPrice: number;
}

export class ListProductService {
  public async byId(id: string): Promise<Product | undefined> {
    const productsRepository = getCustomRepository(ProductRepository);
    const product = productsRepository.findById(id);
    return product;
  }

  public async byPriceRange({ minPrice, maxPrice }: FindByPriceRangeDTO): Promise<Product[] | undefined> {
    const productsRepository = getCustomRepository(ProductRepository);
    const products = productsRepository.findByPriceRange(minPrice, maxPrice);
    return products;
  }
}
