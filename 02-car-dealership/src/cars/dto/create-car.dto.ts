/// DTO son recomendables hacerlos con clases y no con interfaces, vivirán para hacer validaciones de la data si con clases

import { IsString, MinLength } from 'class-validator';

//- Los DTO Es como nosotros esperamos mover la data dentro de nuestra app
export class CreateCarDto {
  ///1 Falta meta data a estas propiedades, asea validaciones, ejemplo que sea string que tenga nose cuantos caracteres etc..
  @IsString({
    message: 'The brand most be a string, cambiar mensaje por defecto',
  })
  readonly brand: string;

  @IsString() // esto lo importa del class-validator
  @MinLength(3) // Mínimo 3 letras
  readonly model: string;
}
