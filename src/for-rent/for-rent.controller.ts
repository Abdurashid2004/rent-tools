import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ForRentService } from './for-rent.service';
import { CreateForRentDto } from './dto/create-for-rent.dto';
import { UpdateForRentDto } from './dto/update-for-rent.dto';

@Controller('for-rent')
export class ForRentController {
  constructor(private readonly forRentService: ForRentService) {}

  @Post()
  create(@Body() createForRentDto: CreateForRentDto) {
    return this.forRentService.create(createForRentDto);
  }

  @Get()
  findAll() {
    return this.forRentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.forRentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateForRentDto: UpdateForRentDto) {
    return this.forRentService.update(+id, updateForRentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.forRentService.remove(+id);
  }
}
