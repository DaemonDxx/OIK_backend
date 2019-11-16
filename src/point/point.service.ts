import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Point} from './point.interface';
import {CreatePointDTO} from './point.dto';

@Injectable()
export class PointService {

    constructor(@InjectModel('Point') private readonly pointModel: Model<Point>) {}

    async createPoint(createPointDTO: CreatePointDTO): Promise<Point> {
        const point = await this.pointModel(createPointDTO);
        return point.save();
    }
}
