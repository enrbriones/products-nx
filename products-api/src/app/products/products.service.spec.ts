import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { PrismaService } from '../prisma/prisma.service';


const mockProducts = [
  {
    createdAt: new Date("2024-10-03T21:57:29.207Z"),
    description: "una descripcion",
    id: "66ff1349ca2b427e56703a69",
    name: "Producto 1",
    price: 4.55,
    updatedAt: new Date("2024-10-03T21:57:29.207Z")
  },
  {
    createdAt: new Date("2024-10-04T14:36:32.994Z"),
    description: "una descripcion 333",
    id: "66fffd71cf9dc3ca6acac34e",
    name: "Producto 3",
    price: 10,
    updatedAt: new Date("2024-10-04T14:36:32.994Z"),
  }
]
const mockProduct = {
  id: '1',
  name: 'Test Product',
  description: 'Test Description',
  price: 100,
};

const mockPrismaService = {
  product: {
    findMany: jest.fn().mockResolvedValue(mockProducts),
    create: jest.fn().mockResolvedValue(mockProduct),
    delete: jest.fn().mockResolvedValue(mockProduct),
    findFirst: jest.fn().mockResolvedValue(mockProduct),
  },
};

describe('ProductsService', () => {
  let service: ProductsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService
        }
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result = await service.findAll();
      expect(result).toEqual(mockProducts);
      expect(prisma.product.findMany).toHaveBeenCalled();
    });
  })

  describe('create', () => {
    it('should create and return a product', async () => {
      const newProduct = { name: 'New Product', description: 'New Description', price: 50 };
      const result = await service.create(newProduct);
      expect(result).toEqual(mockProduct);
      expect(prisma.product.create).toHaveBeenCalledWith({ data: newProduct });
    });
  });

  describe('delete', () => {
    it('should delete a product and return void', async () => {
      await service.remove('1');
      expect(prisma.product.delete).toHaveBeenCalledWith({ where: { id: '1' } });
    });

    it('should throw a NotFoundException if product not found', async () => {
      jest.spyOn(prisma.product, 'delete').mockRejectedValueOnce(new Error("Product can't be found"));
      await expect(service.remove('2')).rejects.toThrow(Error);
    });
  });
});
