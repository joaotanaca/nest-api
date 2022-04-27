/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

import { PostModel } from 'database/interface/post'

export type PostDocument = PostModel & Document

@Schema()
export class Posts {
  @Prop({ required: [true, 'É necessário.'], text: true })
  title: string

  @Prop({
    required: [true, 'É preciso adicionar o subtitulo do artigo.'],
    text: true,
  })
  subtitle: string

  @Prop({ required: [true, 'É preciso adicionar uma imagem de destaque.'] })
  image: string

  @Prop({ required: [true, 'É necessário author um artigo.'], text: true })
  authorship: string

  @Prop({ required: [true, 'É necessário adicionar um artigo.'], text: true })
  article: string

  @Prop({ required: [true, 'É necessário.'] })
  createdAt: string

  @Prop({ required: [true, 'É necessário.'] })
  updatedAt: string

  @Prop([String])
  tags: string[]
}

export const PostSchema = SchemaFactory.createForClass(Posts)
