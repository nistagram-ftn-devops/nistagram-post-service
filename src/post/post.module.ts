import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostRepository } from './post.repository';
import { CommentRepository } from './comment.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PostRepository, CommentRepository])],
  providers: [PostService],
  controllers: [PostController]
})
export class PostModule {}
