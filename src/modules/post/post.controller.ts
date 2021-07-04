import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { Post as PostEntity } from './post.entity';
import { PostService } from './post.service';
import { CreateCommentDto, CreatePostDto } from './post.types';

@Controller('post')
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

    @Post()
    create(@Body() args: CreatePostDto): Promise<PostEntity> {
        return this.postService.create(args)
    }

    @Post(':id/comment')
    createComment(@Param('id') id: number, @Body() args: CreateCommentDto): Promise<PostEntity> {
        return this.postService.createComment(id, args)
    }
}