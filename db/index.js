/* eslint-disable no-console */
const mongoose = require('mongoose');
const { USERNAME, PASSWORD, CLUSTER_NAME } = require('../config');

const { Schema } = mongoose;

const url = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER_NAME}.mongodb.net/weather?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true`;
mongoose.connect(url);

const trackSchema = new Schema({
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
  },
  visibility: Number,
  wind: {
    speed: Number,
    deg: Number,
    gust: Number,
  },
  location: {
    city: String,
    state: String,
    country: String,
  },
});
const Track = mongoose.model('Track', trackSchema);
module.exports = { Track };
