import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

/// Creamos un DTO para el update, porque es diferente el de el crear, aca quiero que en el body me manden el id y que varias propiedades sean opcionales, todo eso depende de tu caso
export class UpdateCarDto {
  @IsString()
  @IsUUID()
  readonly id: string;

  @IsString()
  /// Crear propiedad opcional, el signo de ? es para que del lado de TSsepa que es opcional
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  readonly model?: string;
}
