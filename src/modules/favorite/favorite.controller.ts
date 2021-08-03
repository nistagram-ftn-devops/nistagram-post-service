import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DeepPartial } from 'typeorm';
import { PostService } from '../post/post.service';
import { Favorite } from './favorite.entity';
import { FavoriteService } from './favorite.service';

@Controller('api/post/favorite')
export class FavoriteController {
    constructor(private favoriteService: FavoriteService, private postService: PostService) {}

    @Get(':id')
    async getFavoritesForUser(@Param('id') id: number ) {
        return this.favoriteService.getFavoritesForUser(id)
    }

    @Post()
    async addToFavorites(@Body() payload: DeepPartial<Favorite>) {
        const post = await this.postService.findById(payload.post.id)
        return this.favoriteService.add(post, payload)
    }

    @Delete(':id')
    async removeFromFavorites(@Param('id') id: string) {
        const favorite = await this.favoriteService.findById(+id)
        this.favoriteService.delete(favorite)
    }
}