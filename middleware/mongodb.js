import mongoose from 'mongoose';
import { MONGO_URL } from '../config';

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  await mongoose.connect(MONGO_URL, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
  });
  return handler(req, res);
};

export default connectDB;
