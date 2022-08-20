import { IsCurrency, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsCurrency()
  public price: number;
}