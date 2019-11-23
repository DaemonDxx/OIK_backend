import { Injectable } from '@nestjs/common';
import { UserService } from '../UserModule/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private readonly userService: UserService, private readonly jwt: JwtService) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.userService.findUserByLogin(login);
    if (!user || user.password !== pass) {
      return null;
    }
    const {password, ...result} = user;
    return result;
  }

  async createToken(user: any): Promise<any> {
    return {
      accessToken: this.jwt.sign({
        login: user.login,
        role: user.role,
      }),
    };
  }
}
