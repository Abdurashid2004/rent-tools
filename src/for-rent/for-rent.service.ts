import { Injectable } from '@nestjs/common';
import { CreateForRentDto } from './dto/create-for-rent.dto';
import { UpdateForRentDto } from './dto/update-for-rent.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ForRent } from './entities/for-rent.entity';

@Injectable()
export class ForRentService {
  constructor(
    @InjectModel(ForRent.name) private forRentModel: Model<ForRent>,
  ) {}
  create(createForRentDto: CreateForRentDto) {
    return 'This action adds a new forRent';
  }

  findAll() {
    return `This action returns all forRent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} forRent`;
  }

  update(id: number, updateForRentDto: UpdateForRentDto) {
    return `This action updates a #${id} forRent`;
  }

  remove(id: number) {
    return `This action removes a #${id} forRent`;
  }
}
