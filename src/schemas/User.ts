/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
import { UserModel } from 'database/interface/user';

const Schema = new mongoose.Schema<UserModel>({
  name: {
    type: String,
    required: [true, 'É preciso adicionar o name do artigo.'],
  },
  email: {
    type: String,
    required: [true, 'É preciso adicionar o subtitulo do artigo.'],
  },
  avatar: {
    type: String,
    required: [true, 'É preciso adicionar uma imagem.'],
  },
  password: {
    type: String,
    required: [true, 'É necessário author um artigo.'],
  },
}).index({
  name: 'text',
  email: 'text',
});

const Model = mongoose.model('User', Schema);

export { Model as User };
