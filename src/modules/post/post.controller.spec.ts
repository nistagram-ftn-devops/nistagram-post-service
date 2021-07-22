import { Test, TestingModule } from '@nestjs/testing';
import { PostCommentRepository } from '../post-comment/post-comment.repository';
import { PostCommentService } from '../post-comment/post-comment.service';
import { PostController } from './post.controller';
import { PostRepository } from './post.repository';
import { PostService } from './post.service';

describe('PostController', () => {
  let controller: PostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostService, PostRepository, PostCommentService, PostCommentRepository],
      controllers: [PostController],
    }).compile();

    controller = module.get<PostController>(PostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
