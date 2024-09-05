import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<UserMission>;

@Schema()
export class UserMission {
  @Prop()
  username: string;
  @Prop()
  email: string;
  @Prop()
  masqueid: string;

}

export const UserSchema = SchemaFactory.createForClass(UserMission);