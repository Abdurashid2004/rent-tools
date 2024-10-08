import { PartialType } from '@nestjs/swagger';
import { CreateRentedThingDto } from './create-rented-thing.dto';

export class UpdateRentedThingDto extends PartialType(CreateRentedThingDto) {}
