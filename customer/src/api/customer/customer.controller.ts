import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateCustomerDto } from './customer.dto';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';

import { MessagePattern,Payload } from '@nestjs/microservices';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Controller('customer')
export class CustomerController {
  @Inject(CustomerService)
  private readonly service: CustomerService;

  @Get(':id')
  public getCustomer(@Param('id', ParseIntPipe) id: number): Promise<Customer> {
    return this.service.getCustomer(id);
  }

  @Post()
  public createCustomer(@Body() body: CreateCustomerDto): Promise<Customer> {
    return this.service.createCustomer(body);
  }
  @MessagePattern({ cmd: 'ping' })
  ping(_: any) {
    return of('pong').pipe(delay(1000));
  }
  @MessagePattern({ cmd: 'getAllCustomers'})
  getAllCustomerGRPC(@Payload() payload): Promise<Customer[]> {
    return this.service.getAllCustomer();
  }
  @MessagePattern({ cmd: 'getCustomer'})
  getCustomerGRPC(@Payload() payload): Promise<Customer> {
    return this.service.getCustomer(payload.id);
  }
  @MessagePattern({ cmd: 'postCustomer'})
  postCustomerGRPC(@Payload() body: CreateCustomerDto): Promise<Customer>{
    return this.service.createCustomer(body);
  }
}