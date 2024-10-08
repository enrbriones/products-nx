import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { PrismaService } from '../../app/prisma/prisma.service';

@Injectable()
export class ProductsService  {

  private readonly logger = new Logger('ProductService');


 constructor(private prisma: PrismaService){}

  async create(createProductDto: CreateProductDto) {
    return await this.prisma.product.create({
      data: createProductDto
    });
  }

  findAll() {
    return this.prisma.product.findMany({});
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} product`;
  // }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return updateProductDto;
  // }

  async remove(id: string) {
    const productExists = await this.prisma.product.findFirst({where: {id}});
    if(!productExists){
      throw new BadRequestException("Product can't be found")
    }
    return this.prisma.product.delete({
      where: { id }
    });
  }
}
