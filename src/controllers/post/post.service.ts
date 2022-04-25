import { Injectable } from '@nestjs/common'
import { GetPost, GetPosts } from './dto'

@Injectable()
export class PostService {
  getPosts(): GetPosts {
    return { posts: [] }
  }

  getPost(id: string): GetPost {
    return { data: { _id: id } } as any
  }
}
