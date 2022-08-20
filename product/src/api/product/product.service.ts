import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    @InjectRepository(Product)
    private readonly repository: Repository<Product>;
  
    
    public getAllProduct(): Promise<Product[]> {
        return this.repository.find();
      }
    public getProduct(id: number): Promise<Product> {
        return this.repository.findOneBy({id:id});
    }
    public createProduct(body: CreateProductDto): Promise<Product> {
      const product: Product = new Product();
  
      product.name = body.name;
      product.price = body.price;
  
      return this.repository.save(product);
    }
}
