/*
Fill in the empty fields and rename file "config.js"
*/

const FILL_ME_IN = null;

const USERNAME = FILL_ME_IN;
const PASSWORD = FILL_ME_IN;
const CLUSTER_NAME = FILL_ME_IN;
const MONGO_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER_NAME}.mongodb.net/weather`

module.exports = {
  MONGO_URL,
  API_KEY: FILL_ME_IN,
  GOOGLE_API_KEY: FILL_ME_IN,
};
