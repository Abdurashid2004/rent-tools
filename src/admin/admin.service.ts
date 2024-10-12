import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from './entities/admin.entity';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from '../helpers/tokens';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<Admin>,
    private readonly jwtservice: JwtService,
    private readonly tokenservice: TokenService,
  ) {}

  async getTokens(admin: Admin) {
    const payload = {
      id: admin.id,
      is_active: admin.is_active,
      is_creator: admin.is_creator,
    };
    return this.tokenservice.getTokensAdmin(payload);
  }

  async createAdmin(createAdminDto: CreateAdminDto, res: Response) {
    const { password, confirm_password } = createAdminDto;

    // Check if the admin already exists
    const existingAdmin = await this.adminModel.findOne({
      full_name: createAdminDto.full_name,
    });
    if (existingAdmin) {
      throw new BadRequestException(
        'There is already an admin with this login',
      );
    }

    // Check if passwords match
    if (password !== confirm_password) {
      throw new BadRequestException('Passwords do not match');
    }

    // Hash the password
    const hashed_password = await bcrypt.hash(password, 7);

    // Create a new admin
    const newAdmin = new Admin({
      ...createAdminDto,
      password: hashed_password,
      is_active: true,
    });

    await newAdmin.save();

    // Generate tokens
    const tokens = await this.getTokens(newAdmin);

    // Hash and save the refresh token
    newAdmin.hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    await newAdmin.save();

    // Set the refresh token in a cookie
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
      httpOnly: true,
    });

    const response = {
      message: 'Admin created successfully',
      admin: newAdmin,
      tokens,
    };

    res.status(401).json({ message: 'Access Denied. No token provided.' });
    return response;
  }

  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
