import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  ///1) Lo que este aquí es lo único que visiblemente acceder a el juera de este modulo
  /// Exportamos nuestro servicio, para consumirlo desde otros módulos
  exports: [CarsService],
})
export class CarsModule {}
