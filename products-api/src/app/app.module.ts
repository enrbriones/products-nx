import { Module } from '@nestjs/common';


import { AppService } from './services/app.service';
import { ProductsModule } from '../products/products.module';
import { PrismaService } from './prisma/prisma.service';
import { AppController } from './controllers/app.controller';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
