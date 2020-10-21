import { Router } from 'express';
import BooksRepository from '../repositories/BooksRepository';

const booksRouter = Router();

const booksRepository = new BooksRepository();

booksRouter.post('/', (request, response) => {
  const { title, author } = request.body;

  const book = booksRepository.create(title, author);

  return response.json(book);
});

export default booksRouter;
