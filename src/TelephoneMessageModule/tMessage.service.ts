import {InjectModel} from '@nestjs/mongoose';
import {Injectable} from '@nestjs/common';
import {TMessage} from './tMessage.interface';
import {CreateTMessageDto} from './tMessage.dto';
import {Model} from 'mongoose';

@Injectable()
export class TelephoneMessageService {

  constructor(@InjectModel('TMessage') private readonly tMessageModel: Model<TMessage>) {}

  async createTMessage(createTMessageDTO: CreateTMessageDto): Promise<TMessage> {
    const tMessage = await this.tMessageModel(createTMessageDTO);
    return tMessage.save();
  }

}
