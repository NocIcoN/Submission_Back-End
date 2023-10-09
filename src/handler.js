const { getBooks, getBookById, addBook, updateBook, deleteBook } = require('./books');

const getAllBooksHandler = (request, h) => {
  const books = getBooks();
  return h.response({
    status: 'success',
    data: {
      books: books,
    },
  }).code(200);
};

const getBookByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const book = getBookById(bookId);

  if (book) {
    return h.response({
      status: 'success',
      data: {
        book: book,
      },
    }).code(200);
  }

  return h.response({
    status: 'fail',
    message: 'Book not found',
  }).code(404);
};

const addBookHandler = (request, h) => {
  const { id, name, publisher } = request.payload;
  const newBook = {
    id: id,
    name: name,
    publisher: publisher,
  };

  addBook(newBook);

  return h.response({
    status: 'success',
    message: 'Book added successfully',
  }).code(201);
};

const updateBookHandler = (request, h) => {
  const { bookId } = request.params;
  const { name, publisher } = request.payload;

  const updatedBook = {
    name: name,
    publisher: publisher,
  };

  updateBook(bookId, updatedBook);

  return h.response({
    status: 'success',
    message: 'Book updated successfully',
  }).code(200);
};

const deleteBookHandler = (request, h) => {
  const { bookId } = request.params;

  deleteBook(bookId);

  return h.response({
    status: 'success',
    message: 'Book deleted successfully',
  }).code(200);
};

module.exports = {
  getAllBooksHandler,
  getBookByIdHandler,
  addBookHandler,
  updateBookHandler,
  deleteBookHandler,
};