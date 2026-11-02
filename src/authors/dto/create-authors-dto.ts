import {
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateAuthorDto {
  @IsString({ message: 'Nama author harus berupa teks' })
  @IsNotEmpty({ message: 'Nama author wajib diisi' })
  @MaxLength(150, { message: 'Nama author tidak boleh lebih dari 150 karakter' })
  readonly name: string;
}