import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { GetPost, GetPosts } from './dto'
import { PostDocument, Posts } from './schemas/post.schema'

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Posts.name) private postModel: Model<PostDocument>
  ) {}

  async getPosts(): Promise<GetPosts> {
    const posts = this.postModel.find().exec() as any
    return posts
  }

  getPost(id: string): GetPost {
    return { data: { _id: id } } as any
  }
}
