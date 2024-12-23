import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  private getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  private getCarById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string
  ) {
    console.log(id);
    return this.carsService.findOne(id);
  }

  @Post()
  private createCar(@Body() createCardDto: CreateCarDto) {
    return this.carsService.create(createCardDto);
  }

  @Patch()
  private updateCar(@Body() updateCardDto: UpdateCarDto) {
    return this.carsService.update(updateCardDto);
  }

  /// implementar servicio y un pipe a el parámetro
  @Delete(':id')
  private deleteCar(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string
  ) {
    return this.carsService.delete(id);
  }
}
