import * as mongoose from 'mongoose';

// TODO: - Добавить поле "Наименование объекта"
//       - Изменить тип date на дату
//       - Добавить поле telephoneMessage
export const PointSchema = new mongoose.Schema({

    pointNumber: String,
    name: String,
    power: Number,
    address: String,
    contractNumber: String,
    area: String,
    date: Date,
    deviceNumber: String,
    capacity: Number,
    lastIndication: String,
    tMessage: {type: mongoose.Types.ObjectId, ref: 'TMessage'},

});
