import {Module, Global} from '@nestjs/common';
import {PointController} from './point.controller';
import {PointService} from './point.service';
import {MongooseModule} from '@nestjs/mongoose';
import {PointSchema} from './point.schema';
import { TMessageSchema } from '../TelephoneMessageModule/tMessage.schema';

@Global()
@Module({
    imports: [MongooseModule.forFeature([{name: 'Point', schema: PointSchema}])],
    providers: [PointService],
    controllers: [PointController],
    exports: [PointService],
})
export class PointModule {}
