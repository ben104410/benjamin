import React from 'react';
import '../styles.css';
interface Book {
  id: number;
  title: string;
  author: string;
  status: string;
}

interface BookItemProps {
  book: Book;
  onChangeStatus: (id: number, status: string) => void;
  onDelete: (id: number) => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, onChangeStatus, onDelete }) => {
  return (
    <div className="border p-3 rounded mb-2 flex justify-between items-center">
      <div>
        <h3 className="font-bold">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author}</p>
        <label htmlFor={`status-select-${book.id}`} className="block text-sm font-medium text-gray-700 mt-2">
          Status
        </label>
        <select
          id={`status-select-${book.id}`}
          value={book.status}
          onChange={(e) => onChangeStatus(book.id, e.target.value)}
          className="mt-1 border p-1"
        >
          <option value="to-read">To Read</option>
          <option value="reading">Reading</option>
          <option value="finished">Finished</option>
        </select>
      </div>
      <button
        onClick={() => onDelete(book.id)}
        className="text-red-500 hover:underline"
      >
        Delete
      </button>
    </div>
  );
};

export default BookItem;
