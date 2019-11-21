import { Controller, Post, Res, Body, NotFoundException, HttpStatus, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import {CreatePointDTO} from './point.dto';
import {PointService} from './point.service';
import { FilterDto } from './filter.dto';
import { ValidatePoint } from './ponit.validatePipe';

@Controller()
export class PointController {

        constructor(private pointService: PointService) {}

        // TODO: - Добавить обработку ситуации, когда поиск без результатов

        @Post('/Point')
        async createPoint(@Res() res, @Body(new ValidatePoint()) createPointDTO: CreatePointDTO) {
            const point = await this.pointService.createPoint(createPointDTO);
            return res.status(HttpStatus.OK).json({
                message: 'Point is created',
                point,
            });
        }

        @Get('/Point')
        async getPointsInDays(@Res() res, @Body() filter: FilterDto) {
          const arrDate = filter.days.split(';').map((e) => new Date(e));
          const points = await this.pointService.getPoints(arrDate);
          res.status(HttpStatus.OK).json({
            points,
          });
        }

}
