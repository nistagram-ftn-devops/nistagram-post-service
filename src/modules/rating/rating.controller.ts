import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DeepPartial } from 'typeorm';
import { PostService } from '../post/post.service';
import { Rating } from './rating.entity';
import { RatingService } from './rating.service';
import { RatingType } from './rating.types';

@Controller('api/post/rating')
export class RatingController {
    constructor(private ratingService: RatingService, private postService: PostService) {}

    @Get('likes/:postId')
    getLikes(@Param('postId') postId: string) {
        return this.ratingService.findByPostId(+postId, RatingType.like)
    }

    @Get('dislikes/:postId')
    getDislikes(@Param('postId') postId: string) {
        return this.ratingService.findByPostId(+postId, RatingType.dislike)
    }

    @Post()
    async create(@Body() payload: DeepPartial<Rating>) {
        const post = await this.postService.findById(payload.post.id)
        return this.ratingService.create(post, payload)
    }

    @Delete()
    async remove(@Body() payload: DeepPartial<Rating>) {
        const post = await this.postService.findById(payload.post.id)
        const userId = payload.userId
        this.ratingService.remove(post, userId)
    }
}
