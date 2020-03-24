import { UserSetting } from '../Interfaces/userSetting.interface';

export class CreateUserDTO {

  readonly login: string;
  readonly password: string;
  readonly role: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly patronymic: string;
  readonly department: string;
  readonly position: string;

}
