import Head from 'next/head';
import { GlobalStyle } from '../styles/GlobalStyle';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cedrick Garcia</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="author" content="Cedrick Garcia" />
        <meta property="og:title" content="Cedrick Garcia | Portfolio" />
        <meta name="description" content="CED | Coder, Explorer, Developer" />
        <meta
          property="og:description"
          content="CED | Coder, Explorer, Developer."
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Fira+Sans&family=Orbitron:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
