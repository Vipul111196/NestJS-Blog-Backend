import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dtos/create-post.dto';


@Controller('posts')
export class PostsController {
/*
* Injecting the PostsService into the PostsController.
*/
  constructor(private readonly postsService: PostsService) {}

    @Get("{/:userId}")
    public findAll(@Param('userId') userId: number) {
        return this.postsService.findAll(userId);
    }

    @Post()
    public createPost(@Body() createPostDto: CreatePostDto) {
      console.log(createPostDto);
        return this.postsService.createPost(createPostDto);
    }
}
