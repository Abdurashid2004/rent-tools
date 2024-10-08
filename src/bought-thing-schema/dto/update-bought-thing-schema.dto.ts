import { PartialType } from '@nestjs/swagger';
import { CreateBoughtThingSchemaDto } from './create-bought-thing-schema.dto';

export class UpdateBoughtThingSchemaDto extends PartialType(CreateBoughtThingSchemaDto) {}
