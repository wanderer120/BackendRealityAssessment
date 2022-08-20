import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateProductDto } from './product.dto';
import { Product } from './product.entity';
import { ProductService } from './product.service';

import { MessagePattern,Payload } from '@nestjs/microservices';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Controller('product')
export class ProductController {
    @Inject(ProductService)
    private readonly service: ProductService;

    @MessagePattern({ cmd: 'ping' })
    ping(_: any) {
      return of('pong').pipe(delay(1000));
    }
    @MessagePattern({ cmd: 'getAllProducts'})
    getAllProductrGRPC(@Payload() payload): Promise<Product[]> {
      return this.service.getAllProduct();
    }
    @MessagePattern({ cmd: 'getProduct'})
    getProductGRPC(@Payload() payload): Promise<Product> {
      return this.service.getProduct(payload.id);
    }
    @MessagePattern({ cmd: 'postProduct'})
    postProductGRPC(@Payload() body: CreateProductDto): Promise<Product>{
      return this.service.createProduct(body);
    }
}
