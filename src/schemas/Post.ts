import { PostModel } from 'database/interface'
import mongoose from 'mongoose'

const Schema = new mongoose.Schema<PostModel>({
  title: {
    type: String,
    required: [true, 'É preciso adicionar o titulo do artigo.'],
  },
  subtitle: {
    type: String,
    required: [true, 'É preciso adicionar o subtitulo do artigo.'],
  },
  image: {
    type: String,
    required: [true, 'É preciso adicionar uma imagem de destaque.'],
  },
  authorship: {
    type: String,
    required: [true, 'É necessário author um artigo.'],
  },
  article: {
    type: String,
    required: [true, 'É necessário adicionar um artigo.'],
  },
  createdAt: {
    type: String,
    required: [true, 'É necessário.'],
  },
  updatedAt: {
    type: String,
    required: [true, 'É necessário.'],
  },
  tags: [String],
}).index({
  title: 'text',
  subtitle: 'text',
  authorship: 'text',
  article: 'text',
})

const Model = mongoose.model('Post', Schema)

export { Model as Post }
