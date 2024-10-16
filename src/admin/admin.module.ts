import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, AdminSchema } from './entities/admin.entity';
import { TokenModule } from 'src/helpers/tokens.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }]),
    TokenModule,
    JwtModule.register({}),
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
