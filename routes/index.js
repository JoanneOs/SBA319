import express from 'express';
import trucksRouter from './trucks.js';

const router = express.Router();

// Welcome Route
router.get('/', (req, res) => {
  res.send('Welcome to the Trucks API!');
});

// Mount the trucks router
router.use('/trucks', trucksRouter);

export default router;