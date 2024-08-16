import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddBook = () => {
  const [book, setBook] = useState({
    bookTitle: '',
    bookAuthor: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/v1/book', book);
      navigate('/');
    } catch (err) {
      console.error('Error adding book', err);
    }
  };

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <button
              className="btn btn-info float-left"
              onClick={() => navigate('/')}
            >
              Show Book List
            </button>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>
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
              <input
                type="submit"
                className="btn btn-info btn-block mt-4"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
