
import {
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreatePublisherDto {
  @IsString()
  @IsNotEmpty({ message: 'Nama publisher wajib diisi' })
  @MaxLength(150, { message: 'Nama publisher tidak boleh lebih dari 150 karakter' })
  readonly name: string;
}