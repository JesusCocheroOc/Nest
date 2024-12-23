import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

/// DTO para crear
export class CreateBrandDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @MinLength(3)
  name: string;
}
