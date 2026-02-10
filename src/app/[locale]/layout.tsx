import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('HOME.METADATA');
  const tt = await getTranslations('NAVIGATION');

  const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
  const homePath = tt('HOME.PATH');
  const canonical = homePath === '/' ? baseUrl : `${baseUrl}${homePath}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: `${t('TITLE')}`,
      template: `%s | ${t('COMPANY_NAME')}`,
    },
    description: t('DESCRIPTION'),
    openGraph: {
      title: {
        default: `${t('TITLE')}`,
        template: `%s | ${t('COMPANY_NAME')}`,
      },
      description: t('DESCRIPTION'),
      type: 'website',
      locale: t('LOCALE'),
      url: baseUrl,
      siteName: t('COMPANY_NAME'),
      images: [
        {
          url: '/opengraph-image.png',
        },
      ],
    },
    alternates: {
      canonical,
      languages: {
        en: baseUrl,
        fi: `${baseUrl}/fi`,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const RootLayout = async ({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      <html lang={locale} className={`${poppins.variable}`}>
        <body className="main">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
};

export default RootLayout;
