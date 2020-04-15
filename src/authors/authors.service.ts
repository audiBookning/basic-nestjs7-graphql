import { Injectable } from '@nestjs/common';
import { AuthorMock } from '../mock/mock';
import { Author } from './models/author.model';

@Injectable()
export class AuthorsService {
  authorList: Author[];

  constructor() {
    this.authorList = AuthorMock;
  }

  findAll() {
    return this.authorList;
  }

  findOneById(id: number) {
    return this.authorList.find(a => a.id === id);
  }
}
