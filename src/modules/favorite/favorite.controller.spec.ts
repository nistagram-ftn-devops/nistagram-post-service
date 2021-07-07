import { Test, TestingModule } from '@nestjs/testing';
import { PostCommentRepository } from '../post-comment/post-comment.repository';
import { PostCommentService } from '../post-comment/post-comment.service';
import { PostRepository } from '../post/post.repository';
import { PostService } from '../post/post.service';
import { FavoriteController } from './favorite.controller';
import { FavoriteRepository } from './favorite.repository';
import { FavoriteService } from './favorite.service';

describe('FavoriteController', () => {
  let controller: FavoriteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FavoriteService, 
        PostService, 
        PostRepository, 
        FavoriteRepository, 
        PostCommentService,
        PostCommentRepository,
      ],
      controllers: [FavoriteController],
    }).compile();

    controller = module.get<FavoriteController>(FavoriteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
