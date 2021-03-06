import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial } from 'typeorm';
import { Post } from '../post/post.entity';
import { Favorite } from './favorite.entity';
import { FavoriteRepository } from './favorite.repository';

@Injectable()
export class FavoriteService {
    constructor(@InjectRepository(FavoriteRepository) private favoriteRepository: FavoriteRepository) {}

    async findById(id: number) {
        const found = await this.favoriteRepository.findOne({ id })
        if (!found) throw new NotFoundException('favorite-not-found')
        return found
    }

    async getFavoritesForUser(userId: number) {
        return await this.favoriteRepository.createQueryBuilder('favorite')
            .leftJoinAndSelect('favorite.post', 'post')
            .where('userId = :userId', { userId })
            .getMany()
    }

    async findByPostIdAndUserId(postId: number, userId: number) {
        return await this.favoriteRepository.createQueryBuilder('favorite')
            .leftJoinAndSelect('favorite.post', 'post')
            .where('post.id = :postId', { postId })
            .andWhere('userId = :userId', { userId })
            .getOne()
    }

    async add(post: Post, payload: DeepPartial<Favorite>) {
        const f = await this.findByPostIdAndUserId(post.id, payload.userId)
        console.log(f)
        if (f) throw new BadRequestException('already-saved')

        return this.favoriteRepository.save({
            userId: payload.userId,
            post: post
        })
    }

    delete(favorite: Favorite) {
        this.favoriteRepository.delete(favorite)
    }
}
