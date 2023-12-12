import './globals.css';
import { Tajawal } from 'next/font/google';

const tajwal = Tajawal({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
});

export const metadata = {
  title: 'طبخاتي',
  description: 'تطبيق لكل أم محتارة شو تطبخ 😚',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <meta name="theme-color" content="#f1f1f1" />
      </head>
      <body className={tajwal.className}>{children}</body>
    </html>
  );
}
