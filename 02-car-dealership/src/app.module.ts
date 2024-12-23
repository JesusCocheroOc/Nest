import { Module } from '@nestjs/common';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';
import { CarsModule } from './cars/cars.module';

/// El app lo agonizamos de esta forma, se supone que esto se hace automático pero por si las moscas
@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
