import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/widgets/Header/Header';
import '../styles/globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Arsen's web-site",
  description: "Arsen Galiev's private page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/src/app/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
