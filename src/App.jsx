// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';
import ShowBook from './pages/ShowBook'; // Import the new component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/show-book/:id" element={<ShowBook />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
};

export default App;
