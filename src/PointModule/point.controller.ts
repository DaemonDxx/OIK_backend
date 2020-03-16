import { Controller, Post, Res, Body, NotFoundException, HttpStatus, Get, UsePipes, ValidationPipe, UseGuards, Param, Query} from '@nestjs/common';
import {CreatePointDTO} from './point.dto';
import {PointService} from './point.service';
import { FilterDto } from './filter.dto';
import { ValidatePoint } from './ponit.validatePipe';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class PointController {

        constructor(private pointService: PointService) {}

        // TODO: - Добавить обработку ситуации, когда поиск без результатов

        @UseGuards(AuthGuard('jwt'))
        @Post('/Point')
        async createPoint(@Res() res, @Body(new ValidatePoint()) createPointDTO: CreatePointDTO) {
            const point = await this.pointService.createPoint(createPointDTO);
            return res.status(HttpStatus.OK).json({
                message: 'Point is created',
                point,
            });
        }

        @UseGuards(AuthGuard('jwt'))
        @Get('/Points')
        async getPointsInDays(@Res() res, @Query() query) {
          const date = new Date(query.day);
          const points = await this.pointService.getPoints(date);
          res.status(HttpStatus.OK).json({
            lenght: points.length,
            points,
          });
        }

}
