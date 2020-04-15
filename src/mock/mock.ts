import { Author } from '../authors/models/author.model';
import { Post } from '../posts/models/post.model';

export const AuthorMock: Author[] = [
  {
    id: 1,
    name: 'A-f1',
  },
  {
    id: 2,
    name: 'A-f2',
  },
  {
    id: 3,
    name: 'A-f3',
  },
];

export const PostMock: Post[] = [
  {
    id: 1,
    title: 'P-t1',
    authorId: 1,
  },
  {
    id: 2,
    title: 'P-t2',
    authorId: 1,
  },
  {
    id: 3,
    title: 'P-t3',
    authorId: 1,
  },
];
