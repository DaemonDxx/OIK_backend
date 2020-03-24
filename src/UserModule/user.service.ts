import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../Interfaces/user.interface';
import { Model } from 'mongoose';
import { CreateUserDTO } from './user.createUserDTO';
import { UserSetting } from '../Interfaces/userSetting.interface';

@Injectable()
export class UserService {

  constructor(@InjectModel('User') private readonly user: Model<User>) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const user = await this.user(createUserDTO).save();
    return user.toObject();
  }

  async findUserByLogin(login: string): Promise<User> {
    const user = await this.user.findOne({login});
    if (user) {
      return user.toObject();
    }
    return user;
  }

  async findStaffByDepartment(department) {
    const staff = await this.user.find({department});
    return staff.map(e => {
      const {password, ...user} = e.toObject();
      return user;
    });
  }

}
