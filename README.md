## The Weather Tracker

This website tracks locations' weather data.

### Using the Page
Click the "Track" button to get started.
The form will accept a full address but only requires city, state, and country.
Once entered, the data provided in the form will be checked against google maps location data and a confirmation modal will appear.
If the location is confirmed, data will immediately be displayed at the top of the table view.
Hourly temperature data for confirmed locations is viewable in the chart view.
To view the chart for a given location, select it from the drop-down menu and temperature data will be displayed.

#### About
I used Next.js to make this page, MongoDB Atlas to store my data, and Vercel to deploy (as per the instructions).

### Repo Layout

#### Database
The MongoDB Atlas connection is made in middleware/mongodb.js. Sensitive data was originally stored in a configuration file, but ultimately I wound up creating secrets in Vercel (which I'd never used before, but quite enjoyed). Mongoose models for the database are stored in /models/.

#### Pages
The page section is pretty straightforward. There's one for the home page, one for the chart view, and one for the the table view.

#### API
/api/ contains my APIs for the site. "Geocoding" is used to confirm the location using Google maps. "Fetch-data" is used to take that confirmed location data and fetch corresponding weather data from the open weather API. Once, fetched, the data is written to the database. "Hourly" is also for fetching open weather API data from a different endpoint (for the charts). "Db-access" is used to retrieve records from MongoDB.

#### Styles
I've got a few global variants defined in globals.css, but most of the styling is in discrete modules.

#### Helpers
This is a folder with functions I decided needed to be extracted from their original file to improve readability.

#### Components
Individual react components are stored here.
