import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/index.js'; // Main router

import deliveryRoutes from './routes/deliveries.js';

//this must come before you use `app
const app = express();
const port = process.env.PORT || 3000;


//this line was forgotton , it caused errors whenever i was trying to post new deliver
// its like telling me hey, whenever you get a request with a Content-Type: application/json, 
// please automatically parse the JSON body and make it
//  available as req.body.

app.use(express.json());

app.use('/deliveries', deliveryRoutes);

dotenv.config();


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sbamongoose', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// mongoose.connect(process.env.ATLAS_URI || 'mongodb://localhost:27017/TrucksTest', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect(process.env.ATLAS_URI || 'mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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