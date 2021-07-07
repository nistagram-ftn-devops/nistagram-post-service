import { Test, TestingModule } from '@nestjs/testing';
import { RatingRepository } from './rating.repository';
import { RatingService } from './rating.service';

describe('RatingService', () => {
  let service: RatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RatingService, RatingRepository],
    }).compile();

    service = module.get<RatingService>(RatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
