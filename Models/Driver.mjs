import mongoose from 'mongoose';

// const driverSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   licenseNumber: { type: String, required: true },
//   experienceYears: { type: Number, required: true },
// }, { timestamps: true });

const driverSchema = new mongoose.Schema({
    name: { 
      type: String, 
      required: [true, 'Name is required'],
      minlength: [3, 'Name must be at least 3 characters']
    },
    licenseNumber: { 
      type: String, 
      required: true,
      unique: true,
      match: [/^[A-Z]{2}\d{5}$/, 'License must be in format AB12345']
    },
    age: {
      type: Number,
      min: [21, 'Driver must be at least 21 years old'],
      max: [70, 'Driver must be under 70 years old']
    }
  }, { timestamps: true });

export default mongoose.model('Driver', driverSchema, 'driver'); // Collection name = driver
