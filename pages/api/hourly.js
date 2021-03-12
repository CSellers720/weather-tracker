import axios from 'axios';
import mongoose from 'mongoose';
import connectDB from '../../middleware/mongodb';
import Track from '../../models/track';

const hourlyPrefix = 'http://api.openweathermap.org/data/2.5/onecall/timemachine';

const handler = async (req, res) => {
  const { id, coord } = req.body;
  const { lat, lon } = coord;
  const dt = Math.floor(Date.now() / 1000) - 300;
  const queryString = `${hourlyPrefix}?units=metric&lat=${lat}&lon=${lon}&dt=${dt}&appid=${process.env.API_KEY}`;
  await axios.get(queryString)
    .then(({ data }) => {
      const { hourly } = data;
      Track.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(id) },
        { $set: { hourly } },
        {},
      )
        .then((results) => {
          res.status(200).json({ results });
        });
    })
    .catch((err) => {
      res.status(400).json({ msg: 'Error fetching hourly data', err });
    });
};

export default connectDB(handler);
