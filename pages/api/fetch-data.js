/* eslint-disable no-console */
import axios from 'axios';
import { API_KEY } from '../../config';

const prefix = 'https://api.openweathermap.org/data/2.5/weather';

export default async (req, res) => {
  const { city, state, country } = req.body;
  const locationString = `${city},${state},${country}`;
  if (req.method === 'POST') {
    await axios.post(`${prefix}?q=${locationString}&appid=${API_KEY}`)
      .then((data) => {
        res.status(200).json({ data: data.data });
      })
      .catch(() => {
        res.status(404).json({ data: 'Location not found' });
      });
  }
};
