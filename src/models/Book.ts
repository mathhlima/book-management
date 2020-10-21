import { uuid } from 'uuidv4';

class Book {
  id: string;

  title: string;

  author: string;

  constructor(title: string, author: string) {
    this.id = uuid();
    this.title = title;
    this.author = author;
  }
}

export default Book;
