import React, { useState } from 'react';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';

interface Book {
  id: number;
  title: string;
  author: string;
  status: string;
}

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (title: string, author: string) => {
    const newBook: Book = {
      id: Date.now(),
      title,
      author,
      status: 'to-read',
    };
    setBooks([...books, newBook]);
  };

  const changeStatus = (id: number, status: string) => {
    setBooks(books.map(book => (book.id === id ? { ...book, status } : book)));
  };

  const deleteBook = (id: number) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">📚 Book Tracker</h1>
      <AddBookForm onAdd={addBook} />
      {['to-read', 'reading', 'finished'].map((status) => (
        <BookList
          key={status}
          books={books}
          status={status}
          onChangeStatus={changeStatus}
          onDelete={deleteBook}
        />
      ))}
    </div>
  );
};

export default App;
