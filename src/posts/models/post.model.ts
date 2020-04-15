import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Author } from '../../authors/models/author.model';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => Author)
  author?: Author;

  authorId: number;
}
