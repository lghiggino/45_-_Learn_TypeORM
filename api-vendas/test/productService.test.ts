import { Connection, createConnection, getCustomRepository } from 'typeorm';
import AppError from "../src/shared/errors/AppError";
import { CreateProductService } from "../src/modules/products/services/CreateProduct.service";
import { ProductRepository } from "../src/modules/products/typeorm/repositories/Products.repository";
import Product from '../src/modules/products/typeorm/entities/Product.entity';

describe('CreateProductService', () => {
  let connection: Connection;
  let createProductService: CreateProductService;
  let productsRepository: ProductRepository;

  beforeAll(async () => {
    connection = await createConnection();
    productsRepository = getCustomRepository(ProductRepository);
  });

  beforeEach(() => {
    createProductService = new CreateProductService();
  });

  afterAll(async () => {
    await productsRepository.clear();
    await connection.close();
  });

  it('should be able to create a new product', async () => {
    await createProductService.execute({
      name: 'Test Product',
      price: 10.99,
      quantity: 5,
    });

    const product = await productsRepository.findByName('Test Product');

    console.log({ product })

    expect(product).toHaveProperty('id');
    expect(product?.name).toBe('Test Product');
    expect(product?.price).toBe("10.99");
    expect(product?.quantity).toBe(5);
  });

  it('should not be able to create a product with the same name as an existing product', async () => {
    await productsRepository.create({
      name: 'Test Product',
      price: 10.99,
      quantity: 5,
    });

    await expect(
      createProductService.execute({
        name: 'Test Product',
        price: 15.99,
        quantity: 10,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
