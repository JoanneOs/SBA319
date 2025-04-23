import express from 'express';
import trucksRouter from './trucks.js';
import driversRouter from './drivers.js';

const router = express.Router();

// Welcome Route
router.get('/', (req, res) => {
  res.send('Welcome to the Trucks API!');
});

// Mount the trucks router
router.use('/trucks', trucksRouter);

//adding driver route
router.use('/drivers', driversRouter);

export default router;