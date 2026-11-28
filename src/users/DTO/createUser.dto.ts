import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @IsString({ message: 'Name must be a string' })
  @MinLength(3, { message: 'Name must be between 3 and 80 chars length' })
  @MaxLength(80, { message: 'Name must be between 3 and 80 chars length' })
  name!: string;

  @IsNotEmpty({ message: 'El email no puede ir vacío' })
  @IsEmail({}, { message: 'El email debe de tener un formato válido' })
  email!: string;

  @IsNotEmpty({ message: 'Password cannot be empty' })
  @IsString({ message: 'Password must be a strig¿ng' })
  @MinLength(8, { message: 'Password must be between 8 and 15 chars length' })
  @MaxLength(15, { message: 'Password must be between 8 and 15 chars length' })
  @IsStrongPassword(
    {
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        'Password must contain at least :1 lowercase, 1 uppercase, 1 number y 1 symbol',
    },
  )
  password!: string;

  address!: string;
  phone!: number;
  country!: string;
  city!: string;
}
