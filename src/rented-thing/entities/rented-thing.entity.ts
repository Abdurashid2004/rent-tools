import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { Address, AddressSchema } from 'src/address/entities/address.entity';

export type RentedThingDocument = HydratedDocument<RentedThing>;

@Schema()
export class RentedThing extends Document {
  @Prop({ required: true })
  item_id: string;

  @Prop({ required: true })
  item_name: string;

  @Prop({ required: true })
  rental_start_date: Date;

  @Prop({ required: true })
  rental_end_date: Date;

  @Prop({ required: true })
  delivery_option: string;

  @Prop({
    type: {
      address: AddressSchema,
      expected_delivery_date: Date,
    },
  })
  delivery_details: {
    address: Address;
    expected_delivery_date: Date;
  };

  @Prop({
    type: {
      location_name: String,
      location_address: AddressSchema,
      pickup_time: Date,
    },
  })
  pickup_details: {
    location_name: string;
    location_address: Address;
    pickup_time: Date;
  };

  @Prop({ required: true, default: Date.now })
  created_at: Date;

  @Prop({ required: true, default: Date.now })
  updated_at: Date;
}

export const RentedThingSchema = SchemaFactory.createForClass(RentedThing);
