import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RentedThingService } from './rented-thing.service';
import { CreateRentedThingDto } from './dto/create-rented-thing.dto';
import { UpdateRentedThingDto } from './dto/update-rented-thing.dto';

@Controller('rented-thing')
export class RentedThingController {
  constructor(private readonly rentedThingService: RentedThingService) {}

  @Post()
  create(@Body() createRentedThingDto: CreateRentedThingDto) {
    return this.rentedThingService.create(createRentedThingDto);
  }

  @Get()
  findAll() {
    return this.rentedThingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentedThingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentedThingDto: UpdateRentedThingDto) {
    return this.rentedThingService.update(+id, updateRentedThingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentedThingService.remove(+id);
  }
}
