import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { PostModule } from './modules/post/post.module';
import { PostCommentModule } from './modules/post-comment/post-comment.module';
import { FavoriteModule } from './modules/favorite/favorite.module';
import { RatingModule } from './modules/rating/rating.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    PostModule,
    PostCommentModule,
    FavoriteModule,
    RatingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
