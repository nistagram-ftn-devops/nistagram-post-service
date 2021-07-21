import { Body, Controller, Delete, Post } from '@nestjs/common';
import { DeepPartial } from 'typeorm';
import { PostService } from '../post/post.service';
import { Favorite } from './favorite.entity';
import { FavoriteService } from './favorite.service';

@Controller('post/favorite')
export class FavoriteController {
    constructor(private favoriteService: FavoriteService, private postService: PostService) {}

    @Post()
    async addToFavorites(@Body() payload: DeepPartial<Favorite>) {
        const post = await this.postService.findById(payload.post.id)
        return this.favoriteService.add(post, payload)
    }

    @Delete()
    async removeFromFavorites(@Body() payload: Favorite) {
        const favorite = await this.favoriteService.findById(payload.id)
        this.favoriteService.delete(favorite)
    }
}
