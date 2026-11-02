import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  @IsNotEmpty({ message: 'Customer ID wajib diisi' })
  readonly customerId: string;

  @IsString()
  @IsNotEmpty({ message: 'Order number wajib diisi' })
  @MaxLength(50)
  readonly orderNumber: string;

  @IsString()
  @IsNotEmpty({ message: 'Status wajib diisi' })
  @MaxLength(30)
  readonly status: string;

  @IsNumber()
  @Min(0, { message: 'Total amount tidak boleh kurang dari 0' })
  readonly totalAmount: number;
}