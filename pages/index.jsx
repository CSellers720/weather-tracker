import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MyNavbar from './components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather Tracking Service</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
      </Head>

      <MyNavbar />
      <main>
        {/* Fill in the home page here */}
      </main>
    </div>
  );
}
