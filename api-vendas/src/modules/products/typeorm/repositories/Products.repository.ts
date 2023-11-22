import { EntityRepository, FindConditions, FindManyOptions, Repository } from "typeorm";
import Product from "../entities/Product.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

  public async findById(id: string): Promise<Product> {
    return await this.findById(id);
  }

  public async findByName(name: string): Promise<Product | undefined> {
    const product = await this.findOne({
      where: { name },
    });

    return product;
  }

  public async findByPriceRange(minPrice: number, maxPrice: number): Promise<Product[] | undefined> {
    const products = await this.find({
      where: { price: { gte: minPrice, lte: maxPrice } }
    })

    return products;
  }
}
