import type { Metadata } from 'next';
import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import { Providers } from './providers';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Crypto Finder Club | The Best Launchpad',
  description: 'The most advanced decentralized launchpad for next-generation blockchain projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} dark`}>
      <body className="font-body antialiased bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
