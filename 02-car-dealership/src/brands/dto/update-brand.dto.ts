import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsString, MinLength } from 'class-validator';

/// El PartialType importado de la librería mapped-types que nos instalo el comando, lo que hace es heredar las especificaciones de la otra clase del create
export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @IsString()
  @MinLength(1)
  name: string;
}
