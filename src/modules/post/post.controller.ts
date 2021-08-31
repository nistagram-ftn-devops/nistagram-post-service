import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { Post as PostEntity } from './post.entity';
import { PostService } from './post.service';
import { CreateCommentDto, CreatePostDto } from './post.types';

@Controller('api/post/post')
export class PostController {
    constructor(private postService: PostService) {}

    @Get()
    findAll(): Promise<PostEntity[]> {
        return this.postService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<PostEntity> {
        return this.postService.findById(id)
    }

    @Get('/user/:id')
    findByUserid(@Param('id') id: number): Promise<PostEntity[]> {
        return this.postService.findByUserId(id)
    }

    @Post()
    create(@Body() args: CreatePostDto): Promise<PostEntity> {
        return this.postService.create(args)
    }

    @Post(':id/comment')
    createComment(@Param('id') id: number, @Body() args: CreateCommentDto): Promise<PostEntity> {
        return this.postService.createComment(id, args)
    }

    @Get('search/:keyword')
    searchPosts(@Param('keyword') keyword: string): Promise<PostEntity[]> {
        return this.postService.search(keyword)
    }

    @Patch('home')
    getHomePostsForUser(@Body() payload: { userIds: string[] }): Promise<PostEntity[]> {
        return this.postService.getPostsForUser(payload.userIds)
    }
}