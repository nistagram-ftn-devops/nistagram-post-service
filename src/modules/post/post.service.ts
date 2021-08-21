import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial } from 'typeorm';
import { PostComment } from '../post-comment/post-comment.entity';
import { PostCommentService } from '../post-comment/post-comment.service';
import { Post } from './post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostRepository) 
        private postRepository: PostRepository,
        private commentSerivce: PostCommentService
    ) {}

    async findAll(): Promise<Post[]> {
        return this.postRepository.find()
    }

    async findById(id: number): Promise<Post> {
        const post = await this.postRepository.findOne(id)
        if (!post) throw new NotFoundException('post-not-found')
        return post
    }

    async findByUserId(id: number): Promise<Post[]> {
        return this.postRepository.find({ authorId: id })
    }

    async create(payload: DeepPartial<Post>): Promise<Post> {
        const post = new Post()
        post.authorId = payload.authorId
        post.description = payload.description
        post.imageId = payload.imageId
        post.authorUsername = payload.authorUsername
        post.isPublic = payload.isPublic
        return this.postRepository.save(post)
    }

    async createComment(id: number, payload: DeepPartial<PostComment>): Promise<Post> {
        const post = await this.findById(id)

        const comment = new PostComment()
        comment.authorId = payload.authorId
        comment.text = payload.text
        
        const savedComment = await this.commentSerivce.save(comment)
        post.comments.push(savedComment)
        
        return this.postRepository.save(post)
    }

    async search(keyword: string): Promise<Post[]> {
        const result = await this.postRepository
            .createQueryBuilder('post')
            .orWhere('authorUsername LIKE :keyword', { keyword: `%${keyword}%` })
            .orWhere('description LIKE :keyword', { keyword: `%${keyword}%` })
            .getMany()

        console.log('result', result)

        return result.filter(r => r.isPublic)
    }
}
