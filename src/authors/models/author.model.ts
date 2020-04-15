import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '../../posts/models/post.model';

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field(() => [Post])
  posts?: Post[];
}
