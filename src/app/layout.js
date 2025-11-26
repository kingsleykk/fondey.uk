import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata = {
  title: 'Kingsley | Software Engineer',
  description: 'Full-stack engineer and AI prototype developer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased text-[#ccd6f6] bg-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}