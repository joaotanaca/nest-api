import { Injectable } from '@nestjs/common'

@Injectable()
export class PostService {
  getPosts(): string {
    return 'Posts'
  }
}
