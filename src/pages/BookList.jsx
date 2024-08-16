import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/book')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from BookList', err);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/book/${id}`);
      setBooks(books.filter((book) => book._id !== id));
    } catch (err) {
      console.log('Error deleting book', err);
    }
  };

  return (
    <div className="BookList">
      <div className="col-md-12">
        <br />
        <h2 className="display-4 text-center">Books List</h2>
      </div>
      <div className="col-md-11">
        <Link to="/add" className="btn btn-info float-right">
          + Add New Book
        </Link>
        <br />
        <br />
        <hr />
      </div>
      <div className="list">
        {books.length === 0
          ? 'There is no book record!'
          : books.map((book) => (
              <BookCard key={book._id} book={book} onDelete={handleDelete} />
            ))}
      </div>
    </div>
  );
};

export default BookList;
