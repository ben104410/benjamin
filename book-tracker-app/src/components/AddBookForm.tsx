import React, { useState } from 'react';
import '../styles.css';

interface AddBookFormProps {
  onAdd: (title: string, author: string, date: string) => void;
}

const AddBookForm: React.FC<AddBookFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && author && date) {
      onAdd(title, author, date);
      setTitle('');
      setAuthor('');
      setDate('');
    }
  };

  return (
    <div className="book-card add-book-card">
      <h2 className="add-book-title">Add a New Book</h2>
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 add-book-form"
      >
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded add-book-input-title"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border p-2 rounded add-book-input-author"
        />
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded add-book-input-date"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded add-book-btn"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
