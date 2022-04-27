import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { GetPost, GetPosts } from './dto'
import { PostService } from './post.service'

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async obterPosts(): Promise<GetPosts> {
    return await this.postService.getPosts()
  }

  @Get(':id')
  obterPost(@Param() { id }): GetPost {
    return this.postService.getPost(id)
  }

  @Post()
  criar(@Body() post): string {
    return `Post ${JSON.stringify(post)}`
  }
}
