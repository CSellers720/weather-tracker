import Track from '../../../models/track';

const upsertLocation = ({ newTrack, res }) => {
  Track.findOneAndUpdate(
    { location: newTrack.location },
    newTrack,
    { upsert: true },
    (err, msg) => {
      if (err) {
        res.status(400).json({ err });
      } else {
        res.status(200).json({ msg });
      }
    },
  );
};

export default upsertLocation;
