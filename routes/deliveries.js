// Import express for routing
import express from 'express';

// Import the Delivery model (make sure you have this model in ../models/Delivery.mjs)
import Delivery from '../models/Delivery.mjs';

// Create the Express router instance
const router = express.Router();


// SEED ROUTE – add sample deliveries to the database
// SEED ROUTE – add sample deliveries to the database
router.get('/seed', async (req, res) => {
    try {
      await Delivery.create([
        {
          item: 'Electronics',
          destination: 'New York',
          status: 'In Transit',
          deliveryDate: new Date('2025-06-01T10:00:00Z'), // Add deliveryDate
        },
        {
          item: 'Books',
          destination: 'Chicago',
          status: 'Delivered',
          deliveryDate: new Date('2025-06-02T12:00:00Z'), // Add deliveryDate
        },
        {
          item: 'Furniture',
          destination: 'Los Angeles',
          status: 'Pending',
          deliveryDate: new Date('2025-06-03T14:00:00Z'), // Add deliveryDate
        }
      ]);
      res.redirect('/deliveries'); // Redirect to GET all deliveries
    } catch (error) {
      console.error('Seed Error:', error);
      res.status(500).send('Failed to seed deliveries.');
    }
  });
  


// INDEX ROUTE – Get all deliveries
router.get('/', async (req, res) => {
  try {
    const deliveries = await Delivery.find(); // Fetch all delivery records
    res.json(deliveries); // Return as JSON
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).send('Failed to fetch deliveries.');
  }
});


// SHOW ROUTE – Get one delivery by ID
router.get('/:id', async (req, res) => {
  try {
    const delivery = await Delivery.findById(req.params.id); // Search by ID
    if (!delivery) {
      return res.status(404).send('Delivery not found.');
    }
    res.json(delivery); // Return the found delivery
  } catch (error) {
    console.error('Show error:', error);
    res.status(400).send('Invalid delivery ID.');
  }
});


// CREATE ROUTE – Add a new delivery
router.post('/', async (req, res) => {
    console.log('POST /deliveries hit!');
    console.log('Request Body:', req.body); // Log the body to inspect the data
    try {
      const newDelivery = await Delivery.create(req.body); // Create from request body
      console.log('Delivery created:', newDelivery);
      res.status(201).json(newDelivery); // Send back the created delivery
    } catch (error) {
      console.error('Create error:', error.message);
      res.status(400).send(`Failed to create delivery: ${error.message}`);
    }
  });
  


// UPDATE ROUTE – Update a delivery by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedDelivery = await Delivery.findByIdAndUpdate(
      req.params.id,    // ID from URL
      req.body,         // New data from request
      { new: true }     // Return updated document
    );
    if (!updatedDelivery) {
      return res.status(404).send('Delivery not found.');
    }
    res.json(updatedDelivery); // Send back updated delivery
  } catch (error) {
    console.error('Update error:', error);
    res.status(400).send('Failed to update delivery.');
  }
});


// DELETE ROUTE – Delete a delivery by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedDelivery = await Delivery.findByIdAndDelete(req.params.id);
    if (!deletedDelivery) {
      return res.status(404).send('Delivery not found.');
    }
    res.sendStatus(204); // No content, but success
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).send('Failed to delete delivery.');
  }
});


// Export the router so you can use it in your app.mjs
export default router;
