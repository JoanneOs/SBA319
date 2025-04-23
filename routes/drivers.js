// import express from 'express';
// import Driver from '../models/Driver.mjs';

// const router = express.Router();

// // POST - Add new driver
// router.post('/', async (req, res) => {
//   try {
//     const newDriver = await Driver.create(req.body);
//     res.status(201).json(newDriver);
//   } catch (error) {
//     console.error('Create error:', error);
//     res.status(400).send('Failed to create driver.');
//   }
// });

// // GET - List all drivers
// router.get('/', async (req, res) => {
//   try {
//     const drivers = await Driver.find();
//     res.json(drivers);
//   } catch (error) {
//     console.error('Fetch error:', error);
//     res.status(500).send('Failed to fetch drivers.');
//   }
// });

// export default router;


