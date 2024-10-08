import { Module } from '@nestjs/common';
import { RentedThingService } from './rented-thing.service';
import { RentedThingController } from './rented-thing.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RentedThing, RentedThingSchema } from './entities/rented-thing.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RentedThing.name, schema: RentedThingSchema },
    ]),
  ],
  controllers: [RentedThingController],
  providers: [RentedThingService],
})
export class RentedThingModule {}
