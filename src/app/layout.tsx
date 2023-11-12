import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import 'src/app/globals.css';

import { ReactChildren } from 'src/types';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Code editor',
  description: 'Generate your code',
};

export default function RootLayout({ children }: ReactChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
