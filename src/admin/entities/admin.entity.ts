import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Admin extends Document {
  @ApiProperty({ description: 'Username of the admin', example: 'admin123' })
  @Prop({ required: true })
  username: string;

  @ApiProperty({
    description: 'Password for the admin account',
    example: 'password123',
  })
  @Prop({ required: true })
  password: string;

  @ApiProperty({
    description: 'Phone number of the admin',
    example: '+998901234567',
  })
  @Prop({ required: true })
  phone_number: string;

  @ApiProperty({
    description: 'Profile photo URL',
    example: 'https://example.com/photo.jpg',
    required: false,
  })
  @Prop()
  profile_photo: string;

  @ApiProperty({ description: 'Whether the admin is a creator', example: true })
  @Prop({ required: true })
  is_creator: boolean;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
