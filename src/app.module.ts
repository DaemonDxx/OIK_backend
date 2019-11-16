import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PointModule} from './point/point.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [PointModule, MongooseModule.forRoot('mongodb://localhost:27017', {
    useNewUrlParser: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
