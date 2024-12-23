import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ) {}
  populateDB() {
    //CARS_SEED
    //BRANDS_SEED

    /// Solo con esta llamada ya se debería cargar la data, pero sale es siguiente error

    //- Hay que asegurarnos que estos providers estén importados en nuestro seedModule para poder consumirlos
    this.carsService.fillCarsWithSeesData(CARS_SEED);
    this.brandsService.fillBrandsWithSeesData(BRANDS_SEED);

    return 'SEED executed';
  }
}
