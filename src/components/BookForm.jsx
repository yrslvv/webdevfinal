import React, { useState } from 'react';

const BookForm = ({ onAdd }) => {
  const [book, setBook] = useState({
    bookTitle: '',
    bookAuthor: '',
    description: '',
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(book);
    setBook({ bookTitle: '', bookAuthor: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Title of the Book"
          name="bookTitle"
          className="form-control"
          value={book.bookTitle}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Author"
          name="bookAuthor"
          className="form-control"
          value={book.bookAuthor}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Describe this book"
          name="description"
          className="form-control"
          value={book.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-info btn-block mt-4">Submit</button>
    </form>
  );
};

export default BookForm;
