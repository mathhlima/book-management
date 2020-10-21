import Book from '../models/Book';

class BooksRepository {
  private books: Book[];

  constructor() {
    this.books = [];
  }

  public create(title: string, author: string): Book {
    const book = new Book(title, author);

    this.books.push(book);

    return book;
  }
}

export default BooksRepository;
