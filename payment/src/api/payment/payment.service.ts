import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentDto } from './payment.dto';
import { Payment } from './payment.entity';

@Injectable()
export class PaymentService {
    // @InjectRepository(Payment)
    // private readonly repository: Repository<Payment>;

    // public getPayment(id: number): Promise<Payment> {
    //     return new Promise(resolve => {
    //         let payment = new Payment();
    //         payment.status = Math.random() < 0.5;
    //         resolve(payment);
    //     });
    // }
}
