import {Document} from 'mongoose';
import { UserSetting } from './userSetting.interface';

export interface User extends Document {

  readonly login: string;
  readonly password: string;
  readonly role: string;
  readonly setting: UserSetting;

}
