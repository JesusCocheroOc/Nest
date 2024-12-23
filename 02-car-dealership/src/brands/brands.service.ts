import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuid } from 'uuid';
import { Brand } from './entities/brand.entity';
/// Modificaciones sobre nuestros servicios
@Injectable()
export class BrandsService {
  private brands: Brand[] = [];
  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;

    const brand = {
      id: uuid(),
      name,
      createdAt: new Date().getTime(),
    };

    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new Error(`Brand with id ${id} not found`);
    }

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB.updateAt = new Date().getTime();

        brandDB = { ...brandDB, ...updateBrandDto };

        return brandDB;
      }

      return brand;
    });
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);

    return `Brand with id ${id} has been deleted`;
  }

  /// Método para cargar las marcas
  fillBrandsWithSeesData(brands: Brand[]) {
    this.brands = brands;
  }
}
