import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Address, AddressSchema } from 'src/address/entities/address.entity';

export type RentedThingDocument = HydratedDocument<RentedThing>;

@Schema()
export class RentedThing {
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

  @Prop({ type: AddressSchema })
  delivery_details: {
    address: Address;
    expected_delivery_date: Date;
  };

  @Prop()
  pickup_details: {
    location_name: string;
    location_address: Address;
    pickup_time: Date;
  };
}

export const RentedThingSchema = SchemaFactory.createForClass(RentedThing);
