import { Injectable } from '@nestjs/common';
import { PostMock } from '../mock/mock';
import { Post } from './models/post.model';

@Injectable()
export class PostsService {
  postList: Post[];
  constructor() {
    this.postList = PostMock;
  }
  findAll() {
    return this.postList;
  }

  findOneById(id: number) {
    return this.postList.find(a => a.id === id);
  }

  findAllByAuthor(authorId: number) {
    return this.postList.filter(p => p.authorId === authorId);
  }
}
