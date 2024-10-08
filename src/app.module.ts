import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { ForRentModule } from './for-rent/for-rent.module';
import { UserModule } from './user/user.module';
import { ItemModule } from './item/item.module';
import { BoughtThingSchemaModule } from './bought-thing-schema/bought-thing-schema.module';
import { AddressModule } from './address/address.module';
import { RentedThingModule } from './rented-thing/rented-thing.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    AdminModule,
    ForRentModule,
    UserModule,
    ItemModule,
    BoughtThingSchemaModule,
    AddressModule,
    RentedThingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
