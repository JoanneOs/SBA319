// Import mongoose to define schema and model
import mongoose from 'mongoose';

// Define the schema for a Delivery
const deliverySchema = new mongoose.Schema(
    {
      item: {
        type: String,
        required: [true, 'Item is required'],
        minlength: [3, 'Item name must be at least 3 characters long']
      },
      destination: {
        type: String,
        required: [true, 'Destination is required'],
        minlength: [5, 'Destination must be descriptive (at least 5 characters)']
      },
      status: {
        type: String,
        enum: ['Pending', 'In Transit', 'Delivered'],
        default: 'Pending'
      },
      deliveryDate: {
        type: Date,
        required: [true, 'Delivery date is required']
      },
      driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver',
        default: null
      }
    },
    {
      timestamps: true
    }
  );
  

// Export the Delivery model so we can import it in routes
export default mongoose.model('Delivery', deliverySchema, 'delivery');
// This creates the 'delivery' collection in MongoDB
