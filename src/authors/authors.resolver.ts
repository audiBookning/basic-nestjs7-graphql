import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PostsService } from '../posts/posts.service';
import { AuthorsService } from './authors.service';
import { Author } from './models/author.model';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query(() => [Author])
  findAllAuthors() {
    return this.authorsService.findAll();
  }

  @Query(() => Author)
  findAuthorById(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id);
  }

  @ResolveField()
  posts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAllByAuthor(id);
  }
}
