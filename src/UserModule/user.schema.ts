import * as mongoose from 'mongoose';

// TODO: - Заменить setting на объект в коллекции БД

export const UserSchema = new mongoose.Schema({

  login: String,
  password: String,
  role: String,
  setting: String,

});
