import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AuthorsService } from '../authors/authors.service';
import { Author } from '../authors/models/author.model';
import { Post } from './models/post.model';
import { PostsService } from './posts.service';

@Resolver(() => Post)
export class PostsResolver {
  constructor(
    private postsService: PostsService,
    private authorsService: AuthorsService,
  ) {}

  @Query(() => [Post])
  findAllPosts() {
    return this.postsService.findAll();
  }

  @Query(() => Post)
  findPostById(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.findOneById(id);
  }

  @ResolveField(() => Author)
  author(@Parent() post: Post) {
    const { authorId } = post;
    return this.authorsService.findOneById(authorId);
  }
}
