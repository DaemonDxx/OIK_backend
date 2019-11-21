import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import {validate} from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidatePoint implements PipeTransform<any> {

  async transform(value: any, argm: ArgumentMetadata) {
    const transformValue = this.transformObject(value);
    const object = plainToClass(argm.metatype, transformValue);
    const errors = await validate(object);
    if (errors.length > 0) {
      const messages = errors.map((e) => e.constraints);
      throw new BadRequestException(messages);
    }
    return transformValue;
  }

  transformObject(value: any) {
      const {power, capacity, date, ...obj} = value;
      obj.power = parseFloat(power);
      obj.capacity = parseFloat(capacity);
      obj.date = new Date(date);
      if (!obj.power || !obj.capacity || !obj.date) {
        throw new BadRequestException('Power/capacity is not transform');
      }
      return obj;
  }

}
