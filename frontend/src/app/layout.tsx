import './globals.css'; // or your path to tailwind/index.css
import { LanguageProvider } from '../context/LanguageContext';

// Import lettertypes
import { Geist, DM_Sans } from 'next/font/google';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

const DMSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata = {
  title: 'Patricia Parsa | Portfolio',
  description: 'Ik ben Patricia, front-end developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${DMSans.variable}`}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
