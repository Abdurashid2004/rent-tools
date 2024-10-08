import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoughtThingSchemaService } from './bought-thing-schema.service';
import { CreateBoughtThingSchemaDto } from './dto/create-bought-thing-schema.dto';
import { UpdateBoughtThingSchemaDto } from './dto/update-bought-thing-schema.dto';

@Controller('bought-thing-schema')
export class BoughtThingSchemaController {
  constructor(private readonly boughtThingSchemaService: BoughtThingSchemaService) {}

  @Post()
  create(@Body() createBoughtThingSchemaDto: CreateBoughtThingSchemaDto) {
    return this.boughtThingSchemaService.create(createBoughtThingSchemaDto);
  }

  @Get()
  findAll() {
    return this.boughtThingSchemaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boughtThingSchemaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoughtThingSchemaDto: UpdateBoughtThingSchemaDto) {
    return this.boughtThingSchemaService.update(+id, updateBoughtThingSchemaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boughtThingSchemaService.remove(+id);
  }
}
