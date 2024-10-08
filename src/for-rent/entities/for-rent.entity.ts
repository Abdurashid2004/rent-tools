import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type ForRentDocument = HydratedDocument<ForRent>;

@Schema()
export class ForRent extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  is_available: boolean;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  created_at: Date;

  @Prop({ required: true })
  updated_at: Date;

  @Prop({ required: true })
  is_deleted: boolean;
}

export const ForRentSchema = SchemaFactory.createForClass(ForRent);
