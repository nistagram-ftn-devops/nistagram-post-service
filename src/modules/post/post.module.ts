import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostCommentModule } from '../post-comment/post-comment.module';
import { PostController } from './post.controller';
import { PostRepository } from './post.repository';
import { PostService } from './post.service';

@Module({
    imports: [TypeOrmModule.forFeature([PostRepository]), PostCommentModule],
    providers: [PostService],
    controllers: [PostController],
    exports: [PostService]
})
export class PostModule {}
