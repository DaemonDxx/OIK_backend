import { Body, Controller, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { UserService } from '../UserModule/user.service';
import { AuthService } from './auth.service';
import { User } from '../Interfaces/user.interface';
import { CreateUserDTO } from '../UserModule/user.createUserDTO';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {

  constructor(private readonly userService: UserService, private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/auth/login')
  async login(@Req() req, @Res() res) {
    const token = await this.authService.createToken(req.user);
    res.status(HttpStatus.OK).json(token);
  }

  @Post('/auth/register')
  async register(@Res() res, @Body() userDTO: CreateUserDTO) {
    const user = await this.userService.createUser(userDTO);
    res.status(HttpStatus.OK).json({
      login: user.login,
      role: user.role,
    });
  }

}
