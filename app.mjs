// Import the express module
import express from 'express';


import mangoose from 'mangoose';

// Import the dotenv module to load environment variables
import dotenv from 'dotenv';

import router from './routes/trucks.js'


// Load environment variables from a .env file into process.env
dotenv.config(); //initilaize it here



// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// MongoDB Connection
mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
  mongoose.connection.once('open', () => {
    console.log(' Connected to MongoDB')
  })

  

// Start Server
app.listen(port, () => {
    console.log(` Server is running on http://localhost:${port}`)
  })