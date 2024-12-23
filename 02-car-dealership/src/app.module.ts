import { Module } from '@nestjs/common';
import { CarsController } from './cars/cars.controller';
import { CarsService } from './cars/cars.service';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [BrandsModule, SeedModule],
  controllers: [CarsController],
  providers: [CarsService],
})
export class AppModule {}
