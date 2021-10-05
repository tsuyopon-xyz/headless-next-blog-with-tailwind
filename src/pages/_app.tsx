import { VFC } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';

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
