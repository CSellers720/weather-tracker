import mongoose from 'mongoose';

const { Schema } = mongoose;

const trackSchema = new Schema({
  time: String,
  main: {
    current: Number,
    feelsLike: Number,
    max: Number,
    min: Number,
    pressure: Number,
    humidity: Number,
  },
  weather: {
    main: String,
    description: String,
    icon: String,
  },
  visibility: Number,
  wind: {
    speed: Number,
    deg: Number,
  },
  location: {
    city: String,
    state: String,
    country: String,
  },
});

export default mongoose.models.Track || mongoose.model('Track', trackSchema);
