import { IsCurrency, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {Payment} from './payment.entity';
export class PaymentDto {
  @IsNumber()
  public orderId: number;
  @IsNumber()
  public status: number;
}