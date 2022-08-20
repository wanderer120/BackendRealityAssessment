import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PaymentDto } from './payment.dto';
import { Payment } from './payment.entity';
import { PaymentService } from './payment.service';

import { MessagePattern,Payload } from '@nestjs/microservices';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Controller('payment')
export class PaymentController {
    // @Inject(PaymentService)
    // private readonly service: PaymentService;

    @MessagePattern({ cmd: 'ping' })
    ping(_: any) {
      return of('pong').pipe(delay(1000));
    }
    @MessagePattern({ cmd: 'getPayment'})
    getPaymentGRPC(@Payload() payload): Promise<Payment> {
    //   return this.service.getPayment(payload.id);
        return new Promise(resolve => {
            let payment = new Payment();
            payment.order_id = payload.id;
            payment.status = Math.random() < 0.5;
            resolve(payment);
        });
    }
}
