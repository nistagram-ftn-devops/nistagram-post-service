import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostCommentController } from './post-comment.controller';
import { PostCommentRepository } from './post-comment.repository';
import { PostCommentService } from './post-comment.service';

@Module({
    imports: [TypeOrmModule.forFeature([PostCommentRepository])],
    providers: [PostCommentService],
    controllers: [PostCommentController],
    exports: [PostCommentService]
})
export class PostCommentModule {}
