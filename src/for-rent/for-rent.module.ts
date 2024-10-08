import { Module } from '@nestjs/common';
import { ForRentService } from './for-rent.service';
import { ForRentController } from './for-rent.controller';
import { ForRent, ForRentSchema } from './entities/for-rent.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ForRent.name, schema: ForRentSchema }]),
  ],
  controllers: [ForRentController],
  providers: [ForRentService],
})
export class ForRentModule {}
