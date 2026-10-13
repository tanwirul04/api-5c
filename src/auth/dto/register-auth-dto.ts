import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class RegisterAuthDto {
    @IsNotEmpty({ message: 'Nama harus diisi' })
    readonly name: string;

    @IsNotEmpty({ message: 'Email harus disi' })
    @IsEmail({}, { message: 'Format email tidak valid' })
    readonly email: string;

    @IsNotEmpty({ message: 'Password harus diisi' })
    @MinLength(6, { message: 'Password harus minimal 6 karakter' })
    readonly password: string;

    @IsNotEmpty({ message: 'Konfirmasi password harus diisi' })
    readonly passwordConfirmation: string;
}