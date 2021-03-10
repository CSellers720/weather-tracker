/* eslint-disable no-console */
import axios from 'axios';
import { API_KEY } from '../../config';
import connectDB from '../../middleware/mongodb';
import Track from '../../models/track';

const prefix = 'https://api.openweathermap.org/data/2.5/weather';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { city, state, country } = req.body;
    const locationString = `${city},${state},${country}`;
    await axios.get(`${prefix}?q=${locationString}&appid=${API_KEY}`)
      .then((results) => {
        const { data } = results;
        const {
          main, weather, wind, visibility,
        } = data;
        Track.create({
          time: new Date(),
          main: {
            current: main.temp,
            feelsLike: main.feels_like,
            max: main.temp_max,
            min: main.temp_min,
            pressure: main.pressure,
            humidity: main.humidity,
          },
          weather: {
            main: weather[0].main,
            description: weather[0].description,
            icon: weather[0].icon,
          },
          visibility,
          wind: {
            speed: wind.speed,
            deg: wind.deg,
          },
          location: {
            city,
            state,
            country,
          },
        });
        res.status(200).json({ status: 'completed' });
      })
      .catch((err) => {
        res.status(404).json({ data: 'Location not found', err });
      });
  }
};

export default connectDB(handler);
