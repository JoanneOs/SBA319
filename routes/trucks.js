// Import required modules
import express from 'express';
import Truck from '../models/Truck.mjs';

// Initialize Express Router
const router = express.Router();

// I will keep SEED Route – Adds example trucks to the database
router.get('/seed', async (req, res) => {
  try {
    await Truck.create([
      { model: 'Ford F-150', licensePlate: 'TRK001', capacity: '5 tons' },
      { model: 'Chevrolet Silverado', licensePlate: 'TRK002', capacity: '3 tons' },
      { model: 'Ram 1500', licensePlate: 'TRK003', capacity: '4 tons' }
    ]);
    res.redirect('/trucks');
  } catch (error) {
    console.error('Seed Error:', error);
    res.status(500).send('Seed failed.');
  }
});

// Get all trucks  the index route:
router.get('/', async (req, res) => {
  try {
    const trucks = await Truck.find(); // Get all truck documents
    res.json(trucks); // Send as JSON response
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).send('Failed to fetch trucks.');
  }
});

// Get one truck by ID 
router.get('/:id', async (req, res) => {
  try {
    const truck = await Truck.findById(req.params.id); //Find truck by MongoDB ID
    if (!truck) {
      return res.status(404).send('Truck not found.');
    }
    res.json(truck);
  } catch (err) {
    console.error('Show error:', err);
    res.status(400).send('Invalid truck ID.');
  }
});

// Create new truck
// router.post('/', async (req, res) => {
//   try {
//     const newTruck = await Truck.create(req.body);
//     res.status(201).json(newTruck);
//   } catch (error) {
//     console.error('Create error:', error);
//     res.status(400).send('Failed to create truck.');
//   }
// });


//post new truck
router.post('/', async (req, res) => {
    console.log('POST /trucks hit!');
    console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body);
    try {
      const newTruck = await Truck.create(req.body); //// Create new truck from request body
      console.log('Truck created:', newTruck);
      res.status(201).json(newTruck);//// Respond with the new truck
    } catch (error) {
      console.error('Create error:', error.message);
      res.status(400).send(`Failed to create truck: ${error.message}`);
    }
  });
  

// Update truck by ID  UPDATE Route – PUT update truck by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedTruck = await Truck.findByIdAndUpdate(
      req.params.id,  // Truck ID from URL
      req.body,     /// Updated data
      { new: true }  // Return updated document
    );
    if (!updatedTruck) {
      return res.status(404).send('Truck not found.');
    }
    res.json(updatedTruck);
  } catch (error) {
    console.error('Update error:', error);
    res.status(400).send('Failed to update truck.');
  }
});

// Delete truck by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedTruck = await Truck.findByIdAndDelete(req.params.id);
    if (!deletedTruck) {
      return res.status(404).send('Truck not found.');
    }
    res.sendStatus(204);  // Success but no content
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).send('Failed to delete truck.');
  }
});

//xport router to be used in app
export default router;