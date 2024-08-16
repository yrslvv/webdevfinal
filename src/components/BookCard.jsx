
import React from 'react';

const BookCard = ({ book, onDelete }) => {
  return (
    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books"
        height="200"
      />
      <div className="desc">
        <h2><a href={`/show-book/${book._id}`}>{book.bookTitle}</a></h2>
        <h3>{book.bookAuthor}</h3>
        <p>{book.description}</p>
        <button onClick={() => onDelete(book._id)} className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default BookCard;
