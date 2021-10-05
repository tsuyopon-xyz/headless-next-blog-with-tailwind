import { VFC } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '@/components/templates/Header';
import { Footer } from '@/components/templates/Footer';

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};
export default MyApp;
