import { Injectable } from '@nestjs/common';
import { CreateBoughtThingSchemaDto } from './dto/create-bought-thing-schema.dto';
import { UpdateBoughtThingSchemaDto } from './dto/update-bought-thing-schema.dto';

@Injectable()
export class BoughtThingSchemaService {
  create(createBoughtThingSchemaDto: CreateBoughtThingSchemaDto) {
    return 'This action adds a new boughtThingSchema';
  }

  findAll() {
    return `This action returns all boughtThingSchema`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boughtThingSchema`;
  }

  update(id: number, updateBoughtThingSchemaDto: UpdateBoughtThingSchemaDto) {
    return `This action updates a #${id} boughtThingSchema`;
  }

  remove(id: number) {
    return `This action removes a #${id} boughtThingSchema`;
  }
}
