import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
///1 Importamos el generador de isd
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

// solo es una clase que permite inyecciones
@Injectable()
export class CarsService {
  private cars: Car[] = [];

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Cannot find car with id:${id}`);
    }
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }

  update(updateCarDto: UpdateCarDto) {
    const { id, ...update } = updateCarDto;
    let carDB = this.findOne(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...update,
        };
        return carDB;
      }

      return car;
    });
    return carDB;
  }
  delete(id: string) {
    this.findOne(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return `Car with id ${id} was deleted`;
  }

  /// Método para cargar los carros
  fillCarsWithSeesData(cars: Car[]) {
    this.cars = cars;
  }
}
