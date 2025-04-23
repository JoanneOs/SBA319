
import mongoose from 'mongoose';

const truckSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: { type: Boolean, default: false }
});

const Truck = mongoose.model('Truck', truckSchema);

export default Truck;

