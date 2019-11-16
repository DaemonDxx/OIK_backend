import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import {TelephoneMessageService} from './tMessage.service';
import {CreateTMessageDto} from './tMessage.dto';

@Controller()
export class TelephoneMessageController {
  constructor(private tMessageSerive: TelephoneMessageService) {}

  @Post('/TelephoneMessage')
  async createTMessage(@Res() res, @Body() tMessageDTO: CreateTMessageDto) {
      const point = await this.tMessageSerive.createTMessage(tMessageDTO);
      return res.status(HttpStatus.OK).json({
        message: 'Телефонограмма создана',
        tMessage: point.tMessage,
      });
  }

}
