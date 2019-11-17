import {Document} from 'mongoose';

export interface UserSetting extends Document{

  readonly area: string[];
  readonly members: string[];
  readonly fromPhone: string[];

}
