import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/index.js'; // Main router

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sbamongoose', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/', router);



// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});