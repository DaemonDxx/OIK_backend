import {Module} from '@nestjs/common';
import {TMessageSchema} from './tMessage.schema';
import {TelephoneMessageService} from './tMessage.service';
import {MongooseModule} from '@nestjs/mongoose';
import {TelephoneMessageController} from './tMessage.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: 'TMessage', schema: TMessageSchema}])],
  controllers: [TelephoneMessageController],
  providers: [TelephoneMessageService],
})
export class TelephoneMessageModule {}
