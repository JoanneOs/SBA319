import express from 'express'
import Truck from '../models/Truck.mjs'

const router = express.Router()

// Seed Route
router.get('/seed', async (req, res) => {
  try {
    await Truck.create([
      { name: 'grapefruit', color: 'pink', readyToEat: true },
      { name: 'grape', color: 'purple', readyToEat: false },
      { name: 'avocado', color: 'green', readyToEat: true }
    ])
    res.redirect('/trucks')
  } catch (error) {
    console.error('❌ Seed Error:', error)
    res.status(500).send('Seed failed.')
  }
})

// Index Route - Get all fruits
router.get('/', async (req, res) => {
  try {
    const trucks = await Truck.find()
    res.json(trucks)
  } catch (err) {
    console.error('❌ Fetch error:', err)
    res.status(500).send('Failed to fetch fruits.')
  }
})

// Show Route - Get one fruit by ID
router.get('/:id', async (req, res) => {
  try {
    const truck = await Truck.findById(req.params.id)
    res.json(truck)
  } catch (err) {
    console.error('❌ Show error:', err)
    res.status(404).send('Truck not found.')
  }
})

// Create Route - POST a new fruit
router.post('/', async (req, res) => {
  try {
    req.body.readyToEat = req.body.readyToEat === 'on' || req.body.readyToEat === true
    const newTruck = await Truck.create(req.body)
    res.redirect('/trucks')
  } catch (error) {
    console.error('❌ Create error:', error)
    res.status(400).send('Failed to create truck.')
  }
})

// Update Route - PUT an existing truck by ID
router.put('/:id', async (req, res) => {
  try {
    req.body.readyToEat = req.body.readyToEat === 'on' || req.body.readyToEat === true
    await Truck.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/truck')
  } catch (error) {
    console.error('❌ Update error:', error)
    res.status(400).send('Failed to update fruit.')
  }
})

// Delete Route - DELETE one fruit by ID
router.delete('/:id', async (req, res) => {
  try {
    await Truck.findByIdAndDelete(req.params.id)
    res.redirect('/truck')
  } catch (error) {
    console.error('❌ Delete error:', error)
    res.status(500).send('Failed to delete fruit.')
  }
})

export default router