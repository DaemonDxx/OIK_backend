import { Controller, Get, HttpStatus, Param, Query, Res, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class UserController {

  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/staff')
  async getStaff(@Res() res, @Query() query) {
    const staff = await this.userService.findStaffByDepartment(query.department);
    res.status(HttpStatus.OK).json(staff);
  }

}
