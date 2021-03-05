import styles from '../styles/Home.module.css';
import Earth from './components/Earth';

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.earthBlurb}>
          <h2> Welcome to the Weather Tracker! </h2>
          <p>Select an option above to continue.</p>
        </div>
        <Earth />
      </main>
    </div>
  );
}
