import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model, Schema} from 'mongoose';
import {Point, TMessage} from '../Interfaces/index';
import {CreatePointDTO} from './point.dto';

@Injectable()
export class PointService {

    constructor(@InjectModel('Point') private readonly pointModel: Model<Point>) {}

    async createPoint(createPointDTO: CreatePointDTO): Promise<Point> {
        const point = await this.pointModel(createPointDTO);
        return point.save();
    }

    async saveTMessageInPoint(tMessage: TMessage): Promise<Point> {
        const point = await this.pointModel.findOne({_id: tMessage.point});
        point.tMessage = tMessage;
        return await point.save();
    }
}
