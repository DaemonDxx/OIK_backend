import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model, Schema} from 'mongoose';
import {Point, TMessage} from '../Interfaces/index';
import {CreatePointDTO} from './point.dto';
import * as moment from 'moment';

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

    async getPoints(day: Date): Promise<[Point]> {
        let dayFind = moment(day);
        const points = await this.pointModel.find({
            date: {
                $gte: dayFind.format(), $lt: dayFind.add(1, 'days').format(),
            },
        });
        return points;
    }
}
