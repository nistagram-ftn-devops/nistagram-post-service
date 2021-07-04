import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteRepository } from './favorite.repository';
import { PostModule } from '../post/post.module';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteRepository]), PostModule],
  providers: [FavoriteService],
  controllers: [FavoriteController]
})
export class FavoriteModule {}
