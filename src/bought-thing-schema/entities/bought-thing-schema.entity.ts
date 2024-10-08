import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Address, AddressSchema } from 'src/address/entities/address.entity';

export type BoughtThingDocument = HydratedDocument<BoughtThing>;

@Schema()
export class BoughtThing {
  @Prop({ required: true })
  item_id: string;

  @Prop({ required: true })
  item_name: string;

  @Prop({ required: true })
  purchase_date: Date;

  @Prop({ required: true })
  delivery_option: string;

  @Prop({
    type: {
      address: { type: AddressSchema },
      expected_delivery_date: { type: Date },
    },
  })
  delivery_details: {
    address: Address;
    expected_delivery_date: Date;
  };

  @Prop({
    type: {
      location_name: { type: String },
      location_address: { type: AddressSchema },
      pickup_time: { type: Date },
    },
  })
  pickup_details: {
    location_name: string;
    location_address: Address;
    pickup_time: Date;
  };
}

export const BoughtThingSchema = SchemaFactory.createForClass(BoughtThing);
