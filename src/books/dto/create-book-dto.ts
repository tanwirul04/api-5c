import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateBookDto {
    @IsNotEmpty({ message: 'Name harus diisi' })
    readonly name: string;

    @IsNotEmpty({ message: 'Author harus diisi' })
    readonly author: string;

    @IsNotEmpty({message: 'ISBN harus diisi'})
    readonly isbn: string;

    @IsNotEmpty({message: 'Published harus diisi'})
    @IsInt({message: 'Published harus berupa angka'})
    readonly publishedYear: number;
}