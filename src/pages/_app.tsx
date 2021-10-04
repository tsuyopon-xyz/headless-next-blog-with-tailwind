import { VFC } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '@/components/common/Header';

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
