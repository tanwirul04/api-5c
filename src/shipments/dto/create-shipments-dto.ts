import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class CreateShipmentDto {
  @IsUUID()
  @IsNotEmpty({ message: 'Order ID wajib diisi' })
  readonly orderId: string;

  @IsString()
  @IsNotEmpty({ message: 'Courier wajib diisi' })
  @MaxLength(100)
  readonly courier: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  readonly trackingNumber?: string;

  @IsString()
  @IsNotEmpty({ message: 'Status wajib diisi' })
  @MaxLength(30)
  readonly status: string;

  @IsOptional()
  @IsDateString()
  readonly shippedAt?: string;

  @IsOptional()
  @IsDateString()
  readonly deliveredAt?: string;
}