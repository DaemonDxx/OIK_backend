import { Controller, Post, Body, Res, HttpStatus, UseGuards } from '@nestjs/common';
import {TelephoneMessageService} from './tMessage.service';
import {CreateTMessageDto} from './tMessage.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class TelephoneMessageController {
  constructor(private tMessageSerive: TelephoneMessageService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/TelephoneMessage')
  async createTMessage(@Res() res, @Body() tMessageDTO: CreateTMessageDto) {
      const tMessage = await this.tMessageSerive.createTMessage(tMessageDTO);
      return res.status(HttpStatus.OK).json({
        message: 'Телефонограмма создана',
        tMessage,
      });
  }

}
