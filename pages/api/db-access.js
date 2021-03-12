import connectDB from '../../middleware/mongodb';
import Track from '../../models/track';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    Track
      .find({})
      .sort({ time: -1 })
      .limit(10)
      .exec((error, data) => {
        if (error) {
          res.status(400).json({ error });
        } else {
          res.status(200).json({ data });
        }
      });
  }
};

export default connectDB(handler);
