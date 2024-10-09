import { Injectable } from '@nestjs/common';
import { CreateBoughtThingSchemaDto } from './dto/create-bought-thing-schema.dto';
import { UpdateBoughtThingSchemaDto } from './dto/update-bought-thing-schema.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BoughtThing } from './entities/bought-thing-schema.entity';
import { Model } from 'mongoose';

@Injectable()
export class BoughtThingSchemaService {
  constructor(
    @InjectModel(BoughtThing.name)
    private boughtThingSchemaModel: Model<BoughtThing>,
  ) {}
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
