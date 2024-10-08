import { Module } from '@nestjs/common';
import { ForRentService } from './for-rent.service';
import { ForRentController } from './for-rent.controller';

@Module({
  controllers: [ForRentController],
  providers: [ForRentService],
})
export class ForRentModule {}
