import { IsCurrency, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {Order_Product} from './order_product.entity';
export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  public userId: number;

  public orderProduct: Order_Product[];
}
export enum OrderStatus {
  CREATED = "created",
  CONFIRMED = "confirmed",
  DELIVERED = "delivered",
  CANCELED = "canceled"
}
export class UpdateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  public id:number;
  @IsNotEmpty()
  public status: OrderStatus;
}