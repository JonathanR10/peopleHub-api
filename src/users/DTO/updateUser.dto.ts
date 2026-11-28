import {
  IsEmpty,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsEmpty({ message: 'Id no es un parametro editable' })
  id?: number;

  @IsOptional()
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @IsString({ message: 'Name must be a string' })
  name?: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Contraseña no puede ir vacía' })
  @IsString({ message: 'Contraseña debe ser un string' })
  @MinLength(8, { message: 'Contraseña no debe ser menor a 8 caracteres' })
  @MaxLength(15, { message: 'Contraseña no debe ser mayor a 15 caracteres' })
  @IsStrongPassword(
    {
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        'Contraseña debe contener al menos 1 minuscula, 1 mayuscula, 1 numero y 1 simbolo',
    },
  )
  password?: string;

  @IsOptional()
  address?: string;

  @IsOptional()
  phone?: number;

  @IsOptional()
  country?: string;

  @IsOptional()
  city?: string;
}
