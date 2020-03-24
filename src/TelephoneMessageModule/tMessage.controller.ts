import { Controller, Get, Post, Body, Res, HttpStatus, UseGuards, Query } from '@nestjs/common';
import {TelephoneMessageService} from './tMessage.service';
import {CreateTMessageDto} from './tMessage.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class TelephoneMessageController {
  constructor(private tMessageSerive: TelephoneMessageService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/Telegram')
  async createTMessage(@Res() res, @Body() tMessageDTO: CreateTMessageDto) {
      const tMessage = await this.tMessageSerive.createTMessage(tMessageDTO);
      return res.status(HttpStatus.OK).json({
        tMessage,
      });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/Telegram')
  async getTelegramByPointId(@Res() res, @Query() query) {
    const telegram = await this.tMessageSerive.getTelegramByPointID(query.id);
    res.status(HttpStatus.OK).json({});
  }

}
