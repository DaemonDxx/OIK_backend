import {Controller, Post, Res, Body, NotFoundException, HttpStatus} from '@nestjs/common';
import {CreatePointDTO} from './point.dto';
import {PointService} from './point.service';

@Controller('Point')
export class PointController {

        constructor(private pointService: PointService) {}

        @Post('/point')
        async createPoint(@Res() res, @Body() createPointDTO: CreatePointDTO) {
            const point = await this.pointService.createPoint(createPointDTO);
            return res.status(HttpStatus.OK).json({
                message: 'Point is created',
                point,
            });
        }
}
