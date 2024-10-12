import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  // Tokenlarni olish
  async getTokensAdmin(
    payload: object,
  ): Promise<{ access_token: string; refresh_token: string }> {
    const accessToken = await this.generateToken(
      payload,
      process.env.ACCESS_TOKEN_KEY,
      process.env.ACCESS_TOKEN_TIME,
    );
    const refreshToken = await this.generateToken(
      payload,
      process.env.REFRESH_TOKEN_KEY,
      process.env.REFRESH_TOKEN_TIME,
    );

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  // Tokenni generatsiya qilish
  private async generateToken(
    payload: object,
    secret: string,
    expiresIn: string,
  ): Promise<string> {
    return this.jwtService.signAsync(payload, {
      secret,
      expiresIn,
    });
  }
}
