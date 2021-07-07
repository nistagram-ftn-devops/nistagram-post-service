import { Test, TestingModule } from '@nestjs/testing';
import { PostCommentRepository } from './post-comment.repository';
import { PostCommentService } from './post-comment.service';

describe('PostCommentService', () => {
  let service: PostCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostCommentService, PostCommentRepository],
    }).compile();

    service = module.get<PostCommentService>(PostCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
