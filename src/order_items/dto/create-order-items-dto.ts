
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsUUID,
  Min,
} from 'class-validator';

export class CreateOrderItemDto {
  @IsUUID()
  @IsNotEmpty({ message: 'Order ID wajib diisi' })
  readonly orderId: string;

  @IsUUID()
  @IsNotEmpty({ message: 'Book ID wajib diisi' })
  readonly bookId: string;

  @IsInt()
  @Min(1, { message: 'Quantity minimal 1' })
  readonly quantity: number;

  @IsNumber()
  @Min(0, { message: 'Price tidak boleh kurang dari 0' })
  readonly price: number;

  @IsNumber()
  @Min(0, { message: 'Subtotal tidak boleh kurang dari 0' })
  readonly subtotal: number;
}