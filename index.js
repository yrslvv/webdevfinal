import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Initialize Express
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors()); // Add CORS middleware if your frontend is on a different port

// Connect to MongoDB
mongoose.connect('mongodb+srv://yaroslav:12341234@yarocluster.bocq9hk.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define the Book schema
const bookSchema = new mongoose.Schema({
  bookTitle: { type: String, required: true },
  bookAuthor: { type: String, required: true },
  description: { type: String }
});

const Book = mongoose.model('300368181-yaroslav', bookSchema);

// GET all books
app.get('/api/v1/book', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single book by ID
app.get('/api/v1/book/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book == null) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new book
app.post('/api/v1/book', async (req, res) => {
  const book = new Book({
    bookTitle: req.body.bookTitle,
    bookAuthor: req.body.bookAuthor,
    description: req.body.description
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE a book by ID
app.put('/api/v1/book/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book == null) {
      return res.status(404).json({ message: 'Book not found' });
    }

    if (req.body.bookTitle != null) {
      book.bookTitle = req.body.bookTitle;
    }
    if (req.body.bookAuthor != null) {
      book.bookAuthor = req.body.bookAuthor;
    }
    if (req.body.description != null) {
      book.description = req.body.description;
    }

    const updatedBook = await book.save();
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a book by ID
app.delete('/api/v1/book/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book == null) {
      return res.status(404).json({ message: 'Book not found' });
    }

    await book.remove();
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));
