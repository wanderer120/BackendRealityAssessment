import { IsCurrency, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  public userId: number;

  public orderProduct: Object[];
}
export class UpdateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  public userId: number;

  public status: string;
}