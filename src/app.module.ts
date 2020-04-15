import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsResolver } from './authors/authors.resolver';
import { AuthorsService } from './authors/authors.service';
import { PostsResolver } from './posts/posts.resolver';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AuthorsResolver,
    PostsResolver,
    AuthorsService,
    PostsService,
  ],
})
export class AppModule {}
