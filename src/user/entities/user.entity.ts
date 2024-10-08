import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { Address, AddressSchema } from 'src/address/entities/address.entity';
import {
  BoughtThing,
  BoughtThingSchema,
} from 'src/bought-thing-schema/entities/bought-thing-schema.entity';
import {
  RentedThing,
  RentedThingSchema,
} from 'src/rented-thing/entities/rented-thing.entity';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phone_number: string;

  @Prop({ required: true })
  password: string; // hashed password

  @Prop({ nullable: true })
  hashed_refresh_token?: string; // opsional refresh token

  @Prop({ type: AddressSchema, required: true })
  address: Address;

  @Prop({ type: [BoughtThingSchema], default: [] })
  bought_things: BoughtThing[];

  @Prop({ type: [RentedThingSchema], default: [] })
  rented_things: RentedThing[];
}

export const UserSchema = SchemaFactory.createForClass(User);
