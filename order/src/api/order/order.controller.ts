import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from './order.dto';
import { Order } from './order.entity';
import { OrderService } from './order.service';

import { MessagePattern,Payload } from '@nestjs/microservices';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Controller('order')
export class OrderController {
    @Inject(OrderService)
    private readonly service: OrderService;

    @MessagePattern({ cmd: 'ping' })
    ping(_: any) {
      return of('pong').pipe(delay(1000));
    }
    @MessagePattern({ cmd: 'postOrder'})
    postOrderGRPC(@Payload() body: CreateOrderDto): Promise<Order>{
      return this.service.createOrder(body);
    }
    @MessagePattern({ cmd: 'getAllOrders'})
    getAllOrderGRPC(@Payload() payload): Promise<Order[]> {
      return this.service.getAllOrder();
    }
    @MessagePattern({ cmd: 'getOrder'})
    getOrderGRPC(@Payload() payload): Promise<Order[]> {
      return this.service.getOrder(payload.id);
    }
    @MessagePattern({ cmd: 'updateOrder'})
    updateOrderGRPC(@Payload() body: UpdateOrderDto): Promise<Order>{
      return this.service.updateOrder(body);
    }
}
