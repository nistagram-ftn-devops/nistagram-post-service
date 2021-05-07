import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial } from 'typeorm';
import { Post } from './post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostRepository) 
        private postRepository: PostRepository
    ) {}

    async findAll(): Promise<Post[]> {
        return this.postRepository.find()
    }

    async findById(id: number): Promise<Post> {
        const post = await this.postRepository.findOne(id)
        if (!post) throw new NotFoundException('post-not-found')
        return post
    }

    async create(payload: DeepPartial<Post>): Promise<Post> {
        const post = new Post()
        post.authorId = payload.authorId
        post.description = payload.description
        return this.postRepository.save(post)
    }
}
