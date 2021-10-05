import { VFC } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';

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
