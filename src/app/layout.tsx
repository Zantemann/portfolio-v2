import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
  title: 'Santeri Ora - Portfolio',
  description:
    "Check Santeri's experience and latest ventures in full-stack development and entrepreneurship.",
  openGraph: {
    title: 'Santeri Ora - Portfolio',
    description:
      "Check Santeri's experience and latest ventures in full-stack development and entrepreneurship.",
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_URL,
    siteName: 'Santeri Ora - Portfolio',
    images: [
      {
        url: '/opengraph-image.png',
        alt: 'Santeri Ora - Portfolio',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="main">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
