import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({ description: 'Full name of the admin', example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({
    description: 'Phone number of the admin',
    example: '+998901234567',
  })
  @IsString()
  @IsNotEmpty()
  phone_number: string;

  @ApiProperty({
    description: 'Password for the admin account',
    example: 'password123',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'Profile photo URL',
    example: 'https://example.com/photo.jpg',
    required: false,
  })
  @IsString()
  @IsOptional()
  profile_photo: string;

  @ApiProperty({ description: 'Whether the admin is a creator', example: true })
  @IsBoolean()
  @IsNotEmpty()
  is_creator: boolean;

  @ApiProperty({ description: 'Whether the admin is active', example: true })
  @IsBoolean()
  @IsNotEmpty()
  is_active: boolean;
}
