import './globals.css'; 
import { LanguageProvider } from '../context/LanguageContext';
import Script from 'next/script'

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

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PV3TGTXEZQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Set default consent to denied before GA loads
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
            });

            gtag('js', new Date());
            gtag('config', 'G-PV3TGTXEZQ', {
              'anonymize_ip': true
            });
          `}
        </Script>
      </body>
    </html>
  );
}
