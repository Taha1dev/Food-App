import './globals.css';
import { Cairo } from 'next/font/google';

const cairo = Cairo({ subsets: ['latin'] });

export const metadata = {
  title: 'طبخاتي',
  description: 'تطبيق لكل أم محتارة شو تطبخ 😚',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/x-icon" href="/logo.png"/>
        <meta name="theme-color" content="#f1f1f1" />
      </head>
      <body className={` ${cairo.className}`}>{children}</body>
    </html>
  );
}
