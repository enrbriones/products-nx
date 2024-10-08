import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dto/create-product.dto';

const mockProduct = {
  id: '1',
  name: 'Test Product',
  description: 'Test Description',
  price: 100,
};

const mockProductService = {
  findAll: jest.fn().mockResolvedValue([mockProduct]),
  create: jest.fn().mockResolvedValue(mockProduct),
  remove: jest.fn().mockResolvedValue(mockProduct),
};
describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: mockProductService
        }
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result = await controller.findAll();
      expect(result).toEqual([mockProduct]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('create', () => {
    it('should create and return a product', async () => {
      const newProduct: CreateProductDto = {
        name: 'New Product',
        description: 'New Description',
        price: 50,
      };

      const result = await controller.create(newProduct);
      expect(result).toEqual(mockProduct);
      expect(service.create).toHaveBeenCalledWith(newProduct);
    });
  });

  describe('delete', () => {
    it('should delete a product and return content', async () => {
      const result = await controller.remove('1');
      expect(result).toEqual(mockProduct);
      expect(service.remove).toHaveBeenCalledWith('1');
    });
  });
});
