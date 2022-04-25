import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { PostService } from './post.service'

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  obterPosts(): string {
    return this.postService.getPosts()
  }

  @Get(':id')
  obterPost(@Param() { id }): string {
    return `Post ${id}`
  }

  @Post()
  criar(@Body() post): string {
    return `Post ${JSON.stringify(post)}`
  }
}
