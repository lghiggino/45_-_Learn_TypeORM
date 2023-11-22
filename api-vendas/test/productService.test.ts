import { Connection, createConnection, getCustomRepository } from 'typeorm';
import AppError from '../src/shared/errors/AppError';
import { CreateProductService } from '../src/modules/products/services/CreateProduct.service';
// import { ListProductService } from '@modules/products/services/ListProduct.service';
import { ProductRepository } from '../src/modules/products/typeorm/repositories/Products.repository';
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
    const product = await createProductService.execute({
      name: 'Test Product',
      price: 10.99,
      quantity: 5,
    });

    const createdProduct = await productsRepository.findByName('Test Product');

    expect(createdProduct).toHaveProperty('id');
    expect(createdProduct?.name).toBe(createdProduct?.name);
    expect(`${product?.price}`).toBe(createdProduct?.price);
    expect(product?.quantity).toBe(createdProduct?.quantity);
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

// describe('ListProductService', () => {
//   let connection: Connection;
//   let createProductService: CreateProductService;
//   let listProductService: ListProductService;
//   let productsRepository: ProductRepository;

//   beforeAll(async () => {
//     connection = await createConnection();
//     productsRepository = getCustomRepository(ProductRepository);
//   });

//   beforeEach(() => {
//     createProductService = new CreateProductService();
//     listProductService = new ListProductService();
//   });

//   afterAll(async () => {
//     await productsRepository.clear();
//     await connection.close();
//   });

//   it('should be able to list a product by Id', async () => {
//     const product = await createProductService.execute({
//       name: 'Test Product',
//       price: 10.99,
//       quantity: 5,
//     });

//     const listedProduct = await listProductService.byId(product.id);

//     expect(listedProduct).toHaveProperty('id');
//     expect(listedProduct?.name).toBe(product?.name);
//     expect(`${listedProduct?.price}`).toBe(product?.price);
//     expect(listedProduct?.quantity).toBe(product?.quantity);
//   });

//   // it.skip('should be able to list multiple products by price range', async () => {
//   //   await createProductService.execute({
//   //     name: 'Test Product 1',
//   //     price: 10.99,
//   //     quantity: 5,
//   //   });

//   //   await createProductService.execute({
//   //     name: 'Test Product 2',
//   //     price: 13.99,
//   //     quantity: 5,
//   //   });

//   //   await createProductService.execute({
//   //     name: 'Test Product 3',
//   //     price: 15.99,
//   //     quantity: 5,
//   //   });

//   //   const products = await listProductService.byPriceRange({
//   //     minPrice: 10,
//   //     maxPrice: 14,
//   //   });

//   //   expect(products).toHaveLength(2);
//   //   if (products) {
//   //     expect(products[0].name).toBe('Test Product 1');
//   //     expect(products[1].name).toBe('Test Product 2');
//   //   }
//   // });
// });
