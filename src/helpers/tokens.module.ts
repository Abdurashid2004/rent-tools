import { Module } from '@nestjs/common';
import { TokenService } from './tokens'; // Adjust the import path as necessary
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Define your secret key
      signOptions: { expiresIn: '60s' }, // Define default expiration time (can be overridden)
    }),
  ],
  providers: [TokenService],
  exports: [TokenService], // Export the TokenService to be used in other modules
})
export class TokenModule {}
