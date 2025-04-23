import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  licenseNumber: { type: String, required: true },
  experienceYears: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model('Driver', driverSchema, 'driver'); // 👈 Collection name = driver
