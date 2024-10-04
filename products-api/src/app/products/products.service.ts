import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductsService extends PrismaClient implements OnModuleInit {

  private readonly logger = new Logger('ProductService');


  onModuleInit() {
    this.$connect();
    this.logger.log('MongoDB connected')
  }
  async create(createProductDto: CreateProductDto) {
    return await this.product.create({
      data: createProductDto
    });
  }

  findAll() {
    return this.product.findMany({});
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} product`;
  // }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return updateProductDto;
  // }

  async remove(id: string) {
    const productExists = await this.product.findFirst({where: {id}});
    if(!productExists){
      throw new Error("Product can't be found")
    }
    return this.product.delete({
      where: { id }
    });
  }
}
