
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/book/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="ShowBook">
      <h1>{book.bookTitle}</h1>
      <h2>{book.bookAuthor}</h2>
      <p>{book.description}</p>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default ShowBook;
