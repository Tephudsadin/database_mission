import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserMission } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { promises } from 'dns';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserMission.name) private userModel: Model<UserMission>) {}

  async create(createUserDto: CreateUserDto): Promise<UserMission> {
    // ตรวจสอบว่ามี username ซ้ำหรือไม่
    const existingUser = await this.userModel.findOne({ username: createUserDto.username });
    if (existingUser) {
      throw new ConflictException('Username นี้มีอยู่ในระบบแล้วไอเวร !');
    }

    // ถ้าไม่มี username ซ้ำ ให้สร้างผู้ใช้ใหม่
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
  async findAll(): Promise<UserMission[]> {
    return this.userModel.find().exec();
  }
  async findAllCount() {
    // ใช้ countDocuments() เพื่อทำการนับจำนวนเอกสาร
    const userCount = await this.userModel.countDocuments();
    return {userCount};
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
