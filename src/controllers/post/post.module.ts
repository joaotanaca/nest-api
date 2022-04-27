import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Posts, PostSchema } from './schemas/post.schema'
import { PostController } from './post.controller'
import { PostService } from './post.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Posts.name, schema: PostSchema }]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
