import { Test, TestingModule } from '@nestjs/testing';
import { PostCommentRepository } from '../post-comment/post-comment.repository';
import { PostCommentService } from '../post-comment/post-comment.service';
import { PostRepository } from './post.repository';
import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostService, PostRepository, PostCommentService, PostCommentRepository],
    }).compile();

    service = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
