import Track from '../models/track';

const upsertLocation = ({ newTrack, res }) => {
  Track.findOneAndUpdate(
    { location: newTrack.location },
    newTrack,
    { returnOriginal: false, upsert: true },
    (err, doc) => {
      if (!err) {
        res.status(200).json({ doc });
      } else {
        res.status(400).json({ err });
      }
    },
  );
};

export default upsertLocation;
