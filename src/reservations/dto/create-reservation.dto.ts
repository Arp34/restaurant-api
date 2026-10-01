import { IsString, IsNotEmpty, IsEmail, Min, IsInt } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  customerName: string;

  @IsEmail({}, { message: 'Debe ser un email válido' })
  email: string;

  @IsInt()
  @Min(1, { message: 'Debe haber mínimo 1 persona' })
  people: number;
}