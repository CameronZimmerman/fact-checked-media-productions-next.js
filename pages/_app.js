import Header from '../components/Header';
import Footer from '../components/Footer'
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Staatliches&display=swap" rel="stylesheet" />
        <title>Fact Checked Media Productions</title>
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
