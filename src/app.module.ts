import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PointModule} from './PointModule/point.module';
import {TelephoneMessageModule} from './TelephoneMessageModule/tMessage.Module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [PointModule, TelephoneMessageModule, MongooseModule.forRoot('mongodb://localhost:27017', {
    useNewUrlParser: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
