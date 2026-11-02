import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  Min,
  IsDateString,
} from 'class-validator';

export class CreatePaymentDto {
  @IsUUID()
  @IsNotEmpty({ message: 'Order ID wajib diisi' })
  readonly orderId: string;

  @IsString()
  @IsNotEmpty({ message: 'Payment method wajib diisi' })
  @MaxLength(50)
  readonly paymentMethod: string;

  @IsNumber()
  @Min(0, { message: 'Amount tidak boleh kurang dari 0' })
  readonly amount: number;

  @IsString()
  @IsNotEmpty({ message: 'Status wajib diisi' })
  @MaxLength(30)
  readonly status: string;

  @IsOptional()
  @IsDateString()
  readonly paidAt?: string;
}