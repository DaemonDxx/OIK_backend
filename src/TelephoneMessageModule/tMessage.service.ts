import {InjectModel} from '@nestjs/mongoose';
import {Injectable} from '@nestjs/common';
import {TMessage} from '../Interfaces/tMessage.interface';
import {CreateTMessageDto} from './tMessage.dto';
import {Model} from 'mongoose';
import { PointService } from '../PointModule/point.service';
import { Point } from '../Interfaces';

@Injectable()
export class TelephoneMessageService {

  constructor(@InjectModel('TMessage') private readonly tMessageModel: Model<TMessage>,
              private pointService: PointService) {}

  async createTMessage(createTMessageDTO: CreateTMessageDto): Promise<Point> {
    const tMessage = await this.tMessageModel(createTMessageDTO).save();
    const point = await this.pointService.saveTMessageInPoint(tMessage);
    return point.tMessage;
  }

  async getTelegramByPointID(id: any): Promise<TMessage> {
    const point = await this.pointService.getPointById(id);
    const telegram = await this.tMessageModel.findOne(
      {points: {$elemMatch: point}},
    )
    return telegram;
  }

}
