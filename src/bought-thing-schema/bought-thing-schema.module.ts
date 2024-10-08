import { Module } from '@nestjs/common';
import { BoughtThingSchemaService } from './bought-thing-schema.service';
import { BoughtThingSchemaController } from './bought-thing-schema.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BoughtThing,
  BoughtThingSchema,
} from './entities/bought-thing-schema.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BoughtThing.name, schema: BoughtThingSchema },
    ]),
  ],
  controllers: [BoughtThingSchemaController],
  providers: [BoughtThingSchemaService],
})
export class BoughtThingSchemaModule {}
