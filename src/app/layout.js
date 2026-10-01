import './globals.css';
import { IBM_Plex_Mono, IBM_Plex_Sans, Martian_Mono } from 'next/font/google';

const display = Martian_Mono({ subsets: ['latin'], weight: ['700'], variable: '--font-display' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });
const sans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-sans' });

export const metadata = {
  title: 'Kingsley Kong | Software Engineer',
  description:
    'Software engineer in Melbourne. I build websites that real businesses run on, and the home servers that keep them online.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
