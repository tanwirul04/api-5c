import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty({ message: 'Nama wajib diisi' })
  @MaxLength(150)
  readonly name: string;

  @IsEmail({}, { message: 'Format email tidak valid' })
  @IsNotEmpty({ message: 'Email wajib diisi' })
  @MaxLength(150)
  readonly email: string;

  @IsString()
  @IsNotEmpty({ message: 'Nomor telepon wajib diisi' })
  @MaxLength(20)
  readonly phone: string;
}