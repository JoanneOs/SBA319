import mongoose from 'mongoose';

const truckSchema = new mongoose.Schema({
  model: { 
    type: String, 
    required: true 
  },
  licensePlate: { 
    type: String, 
    required: true,
    unique: true 
  },
  capacity: { 
    type: String, 
    required: true 
  },
  // Add other truck-specific fields as needed
}, { timestamps: true });

export default mongoose.model('Truck', truckSchema);