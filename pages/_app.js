/* eslint-disable react/jsx-filename-extension */
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import '../styles/globals.css';
import MyNavbar from './components/MyNavbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Weather Tracking Service</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      <MyNavbar />
    </>
  );
}

export default MyApp;
