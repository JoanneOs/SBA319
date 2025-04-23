// Import mongoose to define schema and model
import mongoose from 'mongoose';

// Define the schema for a Delivery
const deliverySchema = new mongoose.Schema(
  {
    // Item being delivered
    item: {
      type: String,
      required: [true, 'Item is required'],
      minlength: [3, 'Item name must be at least 3 characters long']
    },

    // Destination of the delivery
    destination: {
      type: String,
      required: [true, 'Destination is required'],
      minlength: [5, 'Destination must be descriptive (at least 5 characters)']
    },

    // Status of the delivery
    status: {
      type: String,
      enum: ['Pending', 'In Transit', 'Delivered'],
      default: 'Pending' // Default status is "Pending"
    },

    // Date for the delivery
    deliveryDate: {
      type: Date,
      required: [true, 'Delivery date is required']
    },

    // Optional: the driver's ID if assigned
    driverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Driver', // Links to the Driver model
      default: null
    }
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt fields
  }
);

// Export the Delivery model so we can import it in routes
export default mongoose.model('Delivery', deliverySchema, 'delivery');
// This creates the 'delivery' collection in MongoDB
