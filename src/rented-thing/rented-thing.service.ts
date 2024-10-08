import { Injectable } from '@nestjs/common';
import { CreateRentedThingDto } from './dto/create-rented-thing.dto';
import { UpdateRentedThingDto } from './dto/update-rented-thing.dto';

@Injectable()
export class RentedThingService {
  create(createRentedThingDto: CreateRentedThingDto) {
    return 'This action adds a new rentedThing';
  }

  findAll() {
    return `This action returns all rentedThing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rentedThing`;
  }

  update(id: number, updateRentedThingDto: UpdateRentedThingDto) {
    return `This action updates a #${id} rentedThing`;
  }

  remove(id: number) {
    return `This action removes a #${id} rentedThing`;
  }
}
