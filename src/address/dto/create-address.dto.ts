import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty({
    description: 'The street of the address',
    example: '123 Main St',
  })
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty({
    description: 'The city of the address',
    example: 'New York',
  })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({
    description: 'The state of the address',
    example: 'NY',
  })
  @IsString()
  @IsNotEmpty()
  state: string;
}
