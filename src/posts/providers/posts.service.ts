import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';

@Injectable()
export class PostsService {
    constructor(
        //  Injecting the UsersService into the PostsService.
        // private readonly usersService: UsersService,
        private readonly usersService: UsersService, // Replace 'any' with the actual type of UsersService if available
     ) {}
        // User servic
    public findAll(userId: number) {
        console.log(userId)
        
        const user = this.usersService.findOneById(userId);
        // User service
        // Find A user
        // Find all posts
        return [
            {
                user: user,
                title: 'Post 1',
                content: 'Content of Post 1',

            },
            {
                user: user,
                title: 'Post 2',
                content: 'Content of Post 2',

            }
        ]
    }

    public createPost(createPostDto: CreatePostDto) {
        // Logic to create a post
        return {
            message: 'Post created successfully',
            post: createPostDto,
        };
    }
}

