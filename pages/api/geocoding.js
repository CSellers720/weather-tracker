import axios from 'axios';
import { GOOGLE_API_KEY } from '../../config';

const prefix = 'https://maps.googleapis.com/maps/api/geocode/json';

export default async (req, res) => {
  const {
    street, city, state, country,
  } = await req.body;
  const splitStreet = street.split(' ').join('%20');
  const locationString = `${splitStreet}%20${city}%20${state}%20${country}`;
  if (req.method === 'POST') {
    await axios.get(`${prefix}?address=${locationString}&key=${GOOGLE_API_KEY}`)
      .then((data) => {
        if (data.data.results.length === 0) {
          // eslint-disable-next-line no-throw-literal
          throw 'No results found';
        }
        res.status(200).json({ data: data.data.results[0] });
      })
      .catch((err) => {
        res.status(404).json({ data: 'Location not found', err });
      });
  } else {
    await res.status(400);
  }
};
