import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model, Schema} from 'mongoose';
import {Point, TMessage} from '../Interfaces/index';
import {CreatePointDTO} from './point.dto';
import { FilterDto } from './filter.dto';

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
        return point.save();
    }

    async getPoints(days: Date[]): Promise<[Point]> {
        const points = await this.pointModel.find({
           date: {$in: days},
        });
        return points;
    }
}
