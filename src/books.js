let books = [];

const getBooks = () => {
  return books;
};

const getBookById = (id) => {
  return books.find((book) => book.id === id);
};

const addBook = (book) => {
  books.push(book);
};

const updateBook = (id, updatedBook) => {
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books[index] = {
      ...books[index],
      ...updatedBook,
    };
  }
};

const deleteBook = (id) => {
  books = books.filter((book) => book.id !== id);
};

module.exports = {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};