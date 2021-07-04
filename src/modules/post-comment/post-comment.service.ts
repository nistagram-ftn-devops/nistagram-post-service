import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostComment } from './post-comment.entity';
import { PostCommentRepository } from './post-comment.repository';

@Injectable()
export class PostCommentService {

    constructor(@InjectRepository(PostCommentRepository) private commentRepository: PostCommentRepository) {}

    async save(comment: PostComment): Promise<PostComment> {
        return this.commentRepository.save(comment)
    }
}
