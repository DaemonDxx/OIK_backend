import {Module} from '@nestjs/common';
import {PointController} from './point.controller';
import {PointService} from './point.service';
import {MongooseModule} from '@nestjs/mongoose';
import {PointSchema} from './point.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Point', schema: PointSchema}])],
    providers: [PointService],
    controllers: [PointController],
})
export class PointModule {}
