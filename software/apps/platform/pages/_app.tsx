import { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../components/layout';
import './styles.css';

import { Roboto, Rubik } from '@next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400'],
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${roboto.className} ${rubik.className}`}>
      <Head>
        <title>Welcome to platform!</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default CustomApp;
