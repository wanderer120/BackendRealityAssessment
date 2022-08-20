import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(@Inject('customerService') private readonly customerService: ClientProxy,
  @Inject('productService') private readonly productService: ClientProxy,
  @Inject('orderService') private readonly orderService: ClientProxy,
  @Inject('paymentService') private readonly paymentService: ClientProxy){

  }
  pingService(serviceName:string){
    let service:ClientProxy = this.getService(serviceName);
    const startTs = Date.now();
    const pattern = { cmd: 'ping' };
    const payload = {};
    return service
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message, duration: Date.now() - startTs })),
      );
  }
  getService(serviceName:string):ClientProxy{
    let service:ClientProxy = null;
    switch(serviceName){
      case 'customerService':
        service = this.customerService;
        break;
      case 'productService':
        service = this.productService;
        break;
      case 'orderService':
        service = this.orderService;
        break;
      case 'paymentService':
        service = this.paymentService;
        break;
    }
    return service;
  }
  grpcCommand(serviceName:string,command:string,payload:object={}){
    let service:ClientProxy = this.getService(serviceName);
    const startTs = Date.now();
    const pattern = { cmd: command };
    return service
    .send<string>(pattern, payload)
    .pipe(
      map((message: string) => ({ message, duration: Date.now() - startTs })),
    );
  }
  getHello(): string {
    return 'Hello World!';
  }
}
