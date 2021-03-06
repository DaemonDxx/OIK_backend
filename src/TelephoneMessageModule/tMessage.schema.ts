import * as mongoose from 'mongoose';

export const TMessageSchema = new mongoose.Schema({

  dateCreated: Date,
  fromName: String,
  toName: String,
  fromPhone: String,
  toPhone: String,
  number: Number,
  points: [{type: mongoose.Schema.Types.ObjectId, ref: 'Point'}],
  status: {type: Boolean, default: false},
  comment: String,

});
