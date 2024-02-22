import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from 'src/components/ui/toaster';
import { ThemeProvider } from 'src/providers/ThemeProvider';
import { ReactChildren } from 'src/types';

import 'src/app/globals.css';
import { cn } from 'src/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Beauty Code Snapshot',
  description: 'Generate your code',
};

export default function RootLayout({ children }: ReactChildren) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
