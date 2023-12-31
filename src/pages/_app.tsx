import GlobalStyles from '@/styles/global';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and StyledComponents"
        />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
