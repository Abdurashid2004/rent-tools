import { PartialType } from '@nestjs/mapped-types';
import { CreateForRentDto } from './create-for-rent.dto';

export class UpdateForRentDto extends PartialType(CreateForRentDto) {}
