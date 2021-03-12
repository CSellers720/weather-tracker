import styles from '../styles/Home.module.css';
import Earth from '../components/Earth';

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.earthBlurb}>
          <h2> Welcome to the Weather Tracker! </h2>
          <p>
            Scroll down for more info, or select an option above.
          </p>
        </div>
        <Earth />
        <div className={styles.divider} />
      </main>
      <div className={styles.readme}>
        <h1>Getting started</h1>
        <div className={styles.info}>
          This website was designed to fetch weather data for a given area.
          To get started:
          <br />
          <ul className={styles.instructions}>
            <li>Click on the &quot;Track&quot; button in the nav bar.</li>
            <li>Put your location information into the form that appears.</li>
            <li>Weather data for the given location will be fetched and stored.</li>
            <li>After being saved, the data can be viewed in either table or chart format.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
