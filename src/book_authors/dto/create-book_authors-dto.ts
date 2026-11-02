import {
  IsUUID,
  IsNotEmpty,
} from 'class-validator';

export class CreateBookAuthorDto {
  @IsUUID()
  @IsNotEmpty({ message: 'Book ID wajib diisi' })
  readonly bookId: string;

  @IsUUID()
  @IsNotEmpty({ message: 'Author ID wajib diisi' })
  readonly authorId: string;
}