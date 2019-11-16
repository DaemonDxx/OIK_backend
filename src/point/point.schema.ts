import * as mongoose from 'mongoose';

export const PointSchema = new mongoose.Schema({

    pointNumber: String,
    name: String,
    power: Number,
    address: String,
    contractNumber: String,
    area: String,
    date: String,
    deviceNumber: String,
    capacity: Number,
    lastIndication: String,

});
