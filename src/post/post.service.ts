import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial } from 'typeorm';
import { Comment } from './comment.entity';
import { CommentRepository } from './comment.repository';
import { Post } from './post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostRepository) 
        private postRepository: PostRepository,

        @InjectRepository(CommentRepository)
        private commentRepository: CommentRepository
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

    async createComment(id: number, payload: DeepPartial<Comment>): Promise<Post> {
        const post = await this.findById(id)

        const comment = new Comment()
        comment.authorId = payload.authorId
        comment.text = payload.text
        
        const savedComment = await this.commentRepository.save(comment)
        post.comments.push(savedComment)
        
        return this.postRepository.save(post)
    }
}
