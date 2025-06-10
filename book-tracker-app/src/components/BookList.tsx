import React from 'react';
import BookItem from './BookItem';
import '../styles.css';

interface Book {
  id: number;
  title: string;
  author: string;
  status: string;
}

interface BookListProps {
  books: Book[];
  status: string;
  onChangeStatus: (id: number, status: string) => void;
  onDelete: (id: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, status, onChangeStatus, onDelete }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 capitalize">{status}</h2>
      {books.filter(book => book.status === status).map(book => (
        <BookItem
          key={book.id}
          book={book}
          onChangeStatus={onChangeStatus}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default BookList;
