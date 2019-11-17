import { UserSetting } from '../Interfaces/userSetting.interface';

export class CreateUserDTO {

  readonly login: string;
  readonly password: string;
  readonly role: string;
  readonly setting: UserSetting;
}
