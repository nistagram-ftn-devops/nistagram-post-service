import { Test, TestingModule } from '@nestjs/testing';
import { PostCommentRepository } from '../post-comment/post-comment.repository';
import { PostCommentService } from '../post-comment/post-comment.service';
import { PostRepository } from '../post/post.repository';
import { PostService } from '../post/post.service';
import { RatingController } from './rating.controller';
import { RatingRepository } from './rating.repository';
import { RatingService } from './rating.service';

describe('RatingController', () => {
  let controller: RatingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RatingService,
        RatingRepository,
        PostService,
        PostRepository,
        PostCommentService,
        PostCommentRepository,
      ],
      controllers: [RatingController],
    }).compile();

    controller = module.get<RatingController>(RatingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
