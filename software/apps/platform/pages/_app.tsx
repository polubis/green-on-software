import { AppProps } from 'next/app';
import Head from 'next/head';
import { Roboto, Rubik } from '@next/font/google';
import { LogInSection } from 'apps/platform/components/log-in-section';
import { Logo } from 'apps/platform/components/logo';
import { Layout, createLink } from 'apps/platform/design-system/layout';
import { ActivityShorthand } from 'apps/platform/components/activity-shorthand';

import './styles.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400'],
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const primaryLinks = [
  createLink('Articles', '/articles'),
  createLink('Waiting room', '/waiting-room'),
  createLink('Courses', '/courses'),
  createLink('Webinars', '/webinars'),
];

const secondaryLinks = [createLink('Sandbox', '/sandbox')];

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${roboto.className} ${rubik.className}`}>
      <Head>
        <title>Welcome to platform!</title>
      </Head>
      <Layout
        primaryLinks={primaryLinks}
        secondaryLinks={secondaryLinks}
        primarySection={<LogInSection />}
        additionalControls={<ActivityShorthand />}
        logo={<Logo />}
      >
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default CustomApp;
