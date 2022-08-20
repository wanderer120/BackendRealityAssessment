import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto,UpdateOrderDto } from './order.dto';
import { Order,OrderStatus } from './order.entity';

@Injectable()
export class OrderService {
    @InjectRepository(Order)
    private readonly repository: Repository<Order>;

    public getAllOrder(): Promise<Order[]> {
      
      return this.repository.find({
        relations: ['products']
      });
    }
    public getOrder(id: number): Promise<Order[]> {
      return this.repository.find({
        relations: ['products'],
        where: { id: id },
      });
    }
    public createOrder(body: CreateOrderDto): Promise<Order> {
      const order: Order = new Order();
  
      order.user_id = body.userId;
      order.products = body.orderProduct;
      
      return this.repository.save(order);
    }
    public async updateOrder(body:UpdateOrderDto): Promise<Order>{
      let order:Order = await this.repository.findOne({where:{id:body.id}});
      if(order === null){
        return null;
      }
      if(order.status === OrderStatus.DELIVERED && body.status === OrderStatus.CANCELED ){
        return null;
      }
      order.status = body.status;
      return this.repository.save(order);
    }
}
