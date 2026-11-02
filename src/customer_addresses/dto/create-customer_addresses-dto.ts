import {
  IsNotEmpty,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class CreateCustomerAddressDto {
  @IsUUID()
  @IsNotEmpty({ message: 'Customer ID wajib diisi' })
  readonly customerId: string;

  @IsString()
  @IsNotEmpty({ message: 'Nama penerima wajib diisi' })
  @MaxLength(150, { message: 'Nama penerima tidak boleh lebih dari 150 karakter' })
  readonly recipientName: string;

  @IsString({})
  @IsNotEmpty({ message: 'Nomor telepon wajib diisi' })
  @MaxLength(20)
  readonly phone: string;

  @IsString()
  @IsNotEmpty({ message: 'Alamat wajib diisi' })
  readonly address: string;

  @IsString()
  @IsNotEmpty({ message: 'Kota wajib diisi' })
  @MaxLength(100)
  readonly city: string;

  @IsString()
  @IsNotEmpty({ message: 'Kode pos wajib diisi' })
  @MaxLength(10)
  readonly postalCode: string;
}