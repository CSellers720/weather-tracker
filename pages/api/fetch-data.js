/* eslint-disable no-console */
import axios from 'axios';
import { API_KEY } from '../../config';
import connectDB from '../../middleware/mongodb';
import genTrack from './helpers/genTrack';
import upsertLocation from './helpers/upsertLocation';

const prefix = 'https://api.openweathermap.org/data/2.5/weather';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { city, state, country } = req.body;
    const locationString = `${city},${state},${country}`;
    await axios.get(`${prefix}?q=${locationString}&units=metric&appid=${API_KEY}`)
      .then((results) => {
        const { data } = results;
        data.location = { city, state, country };
        const newTrack = genTrack(data);
        upsertLocation({ newTrack, res });
      })
      .catch((err) => {
        res.status(404).json({ data: 'Location not found', err });
      });
  }
};

export default connectDB(handler);
