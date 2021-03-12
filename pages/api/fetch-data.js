/* eslint-disable no-console */
import axios from 'axios';
import connectDB from '../../middleware/mongodb';
import genTrack from '../../helpers/genTrack';
import upsertLocation from '../../helpers/upsertLocation';

const prefix = 'https://api.openweathermap.org/data/2.5/weather';

const handler = (req, res) => {
  if (req.method === 'POST') {
    const { city, state, country } = req.body;
    const locationString = `${city},${state},${country}`;
    axios.get(`${prefix}?q=${locationString}&units=metric&appid=${process.env.API_KEY}`)
      .then(async (results) => {
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
