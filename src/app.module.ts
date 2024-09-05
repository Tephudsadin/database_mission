import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [UserModule,MongooseModule.forRoot('mongodb://ncv:1234@20.212.54.87:5009/ncvdb?authMechanism=DEFAULT&authSource=ncvdb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
