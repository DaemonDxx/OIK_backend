import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../Interfaces/user.interface';
import { Model } from 'mongoose';
import { CreateUserDTO } from './auth.createUserDTO';
import { UserSetting } from '../Interfaces/userSetting.interface';


@Injectable()
export class UserService {

  constructor(@InjectModel('User') private readonly user: Model<User>) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const user = await this.user(createUserDTO).save();
    return user;
  }

  async findUserByLogin(login: string): Promise<User> {
    const user = await this.user.findOne({login});
    return user;
  }

}
