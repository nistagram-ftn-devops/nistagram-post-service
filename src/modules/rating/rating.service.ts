import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial } from 'typeorm';
import { Post } from '../post/post.entity';
import { Rating } from './rating.entity';
import { RatingRepository } from './rating.repository';
import { RatingType } from './rating.types';

@Injectable()
export class RatingService {
    constructor(@InjectRepository(RatingRepository) private ratingRepository: RatingRepository) {}

    async findByPostId(postId: number, type: RatingType) {
        return await this.ratingRepository.createQueryBuilder('rating')
            .leftJoinAndSelect('rating.post', 'post')
            .where('post.id = :postId', { postId })
            .andWhere('type = :type', { type })
            .getMany()
    }

    async findByPostIdAndUserId(postId: number, userId: number) {
        return await this.ratingRepository.createQueryBuilder('rating')
            .leftJoinAndSelect('rating.post', 'post')
            .where('post.id = :postId', { postId })
            .andWhere('userId = :userId', { userId })
            .getOne()
    }

    async create(post: Post, payload: DeepPartial<Rating>) {
        const found = await this.findByPostIdAndUserId(post.id, payload.userId)
        if (found) throw new BadRequestException('already-rated')

        return this.ratingRepository.save({
            post: post,
            userId: payload.userId,
            type: payload.type,
        })
    }

    remove(rateId: number) {

    }
}
