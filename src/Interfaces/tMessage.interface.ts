import {Document} from 'mongoose';

export interface TMessage extends Document {

  readonly dateCreated: Date;
  readonly fromName: string;
  readonly toName: string;
  readonly fromPhone: string;
  readonly toPhone: string;
  readonly number: number;
  readonly point: any;

};
