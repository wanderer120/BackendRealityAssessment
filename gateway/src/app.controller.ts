import { Controller, Get,Param,ParseIntPipe,Body,Post,Put } from '@nestjs/common';
import { AppService } from './app.service';
import { zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateCustomerDto } from './customer.dto';
import { CreateProductDto } from './product.dto';
import {CreateOrderDto,UpdateOrderDto} from './order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/ping-customer')
  pingCustomer() {
    return this.appService.pingService('customerService');
  }
  @Get('/customers')
  getAllCustomer(){
    return this.appService.grpcCommand('customerService','getAllCustomers');
  }
  @Get('/customers/:id')
  getCustomer(@Param('id', ParseIntPipe) id: number){
    return this.appService.grpcCommand('customerService','getCustomer',{id:id});
  }
  @Post('/customers')
  public createCustomer(@Body() body: CreateCustomerDto) {
    return this.appService.grpcCommand('customerService','postCustomer',body);
  }

  @Get('/ping-product')
  pingProduct() {
    return this.appService.pingService('productService');
  }
  @Get('/products')
  getAllProducts(){
    return this.appService.grpcCommand('productService','getAllProducts');
  }
  @Get('/products/:id')
  getProduct(@Param('id', ParseIntPipe) id: number){
    return this.appService.grpcCommand('productService','getProduct',{id:id});
  }
  @Post('/products')
  public createProduct(@Body() body: CreateProductDto) {
    return this.appService.grpcCommand('productService','postProduct',body);
  }

  @Get('/ping-order')
  pingOrder() {
    return this.appService.pingService('orderService');
  }
  @Get('/orders')
  getAllOrders(){
    return this.appService.grpcCommand('orderService','getAllOrders');
  }
  @Get('/orders/:id')
  getOrder(@Param('id', ParseIntPipe) id: number){
    return this.appService.grpcCommand('orderService','getOrder',{id:id});
  }
  @Post('/orders')
  public createOrder(@Body() body: CreateOrderDto) {
    return this.appService.grpcCommand('orderService','postOrder',body);
  }
  @Put('/orders')
  public updateOrder(@Body() body: UpdateOrderDto) {
    return this.appService.grpcCommand('orderService','updateOrder',body);
  }
  @Get('/ping-payment')
  pingPayment() {
    return this.appService.pingService('paymentService');
  }
  @Get('/payments/:id')
  getPayment(@Param('id', ParseIntPipe) id: number){
    return this.appService.grpcCommand('paymentService','getPayment',{id:id});
  }
}