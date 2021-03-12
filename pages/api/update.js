/*
  I ran out of time trying to get the table input
  going. I think I made a few mistakes in my implementation
  here, the largest of which is how much data I
  decided to track. Updating every value is arduous.
  I should have taken a more modular approach to the
  forms.
*/

import mongoose from 'mongoose';
import connectDB from '../../middleware/mongodb';
import Track from '../../models/track';

const handler = async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.body.id);
  res.status(200).json({ received: req.body });
};

export default connectDB(handler);
