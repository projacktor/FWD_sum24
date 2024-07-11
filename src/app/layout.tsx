import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/widgets/Header/Header';
import '../styles/globals.css';
import Head from 'next/head';
import { Author } from 'next/dist/lib/metadata/types/metadata-types';

const inter = Inter({ subsets: ['latin'] });

const author: Author = {
  url: 'https://github.com/prjacktor',
  name: 'Arsen Galiev',
};

export const metadata: Metadata = {
  title: "Arsen's web-site",
  authors: author,
  icons: '/src/app/favicon.ico',
  description: "Arsen Galiev's private page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authorContent = Array.isArray(metadata.authors)
    ? metadata.authors.map((author) => author.name).join(', ')
    : metadata.authors?.name;

  return (
    <html lang="en">
      <Head>
        <meta name="author" content={authorContent} />
        {/*<meta name="description" content={metadata.description?.toString()}/>*/}
        <link rel="icon" href="/src/app/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
