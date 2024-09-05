import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {UserMission, UserSchema } from './schemas/user.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: UserMission.name, schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
