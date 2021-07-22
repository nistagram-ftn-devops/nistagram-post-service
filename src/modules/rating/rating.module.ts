import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from '../post/post.module';
import { RatingController } from './rating.controller';
import { RatingRepository } from './rating.repository';
import { RatingService } from './rating.service';

@Module({
  imports: [TypeOrmModule.forFeature([RatingRepository]), PostModule],
  controllers: [RatingController],
  providers: [RatingService]
})
export class RatingModule {}
