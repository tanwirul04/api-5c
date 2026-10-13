import { IsNotEmpty, IsEmail } from 'class-validator';

export class LoginAuthDto {
    @IsEmail({}, { message: 'Format email tidak valid' })
    @IsNotEmpty({ message: 'Email harus diisi' })
    readonly email: string;

    @IsNotEmpty({ message: 'Password harus diisi' })
    readonly password: string;
}