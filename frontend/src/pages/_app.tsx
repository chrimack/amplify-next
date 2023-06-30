import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import { Patua_One, Inter } from 'next/font/google';
import { Amplify } from 'aws-amplify';

Amplify.configure({ ssr: true });

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700'],
});

const patua_one = Patua_One({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-patua-one',
  weight: '400',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={`${inter.variable} ${patua_one.variable}`}>
      <Component {...pageProps} />
    </Layout>
  );
}
