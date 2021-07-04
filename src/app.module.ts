import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { PostModule } from './modules/post/post.module';
import { PostCommentModule } from './modules/post-comment/post-comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    PostModule,
    PostCommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
