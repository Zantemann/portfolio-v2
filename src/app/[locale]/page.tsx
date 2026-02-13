import Image from 'next/image';
import Styles from './page.module.css';
import LogoSlider from '@/components/LogoSlider/LogoSlider';
import Projects from '@/components/Projects/Projects';
import Quiz from '@/components/Quiz/Quiz';
import { getTranslations } from 'next-intl/server';
import { SCHEMA_CONTEXT, JsonLdArray } from '@/utils/schema';
import type { Organization, WebPage, WebSite } from 'schema-dts';

export async function generateMetadata() {
  const t = await getTranslations('HOME.METADATA');
  const n = await getTranslations('NAVIGATION');

  return {
    title: `${t('TITLE')} | ${t('COMPANY_NAME')}`,
    description: t('DESCRIPTION'),
    openGraph: {
      title: `${t('TITLE')} | ${t('COMPANY_NAME')}`,
      description: t('DESCRIPTION'),
      url: n('HOME.PATH'),
      type: 'website',
      locale: t('LOCALE'),
      siteName: t('COMPANY_NAME'),
      images: [
        {
          url: './opengraph-image.png',
        },
      ],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}${n('HOME.PATH')}`,
      languages: {
        en: `${process.env.NEXT_PUBLIC_URL}`,
        fi: `${process.env.NEXT_PUBLIC_URL}/fi`,
      },
    },
  };
}

export default async function Home({ params }: Readonly<{ params: Promise<{ locale: string }> }>) {
  const t = await getTranslations('HOME');
  const n = await getTranslations('NAVIGATION');
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
  const companyName = t('METADATA.COMPANY_NAME');

  const pageUrl = `${baseUrl}${n('HOME.PATH')}`;
  const organizationSchema: Organization = {
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: companyName,
    url: baseUrl,
    logo: `${baseUrl}/ora-logo-white.png`,
  };
  const webSiteSchema: WebSite = {
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: companyName,
    url: baseUrl,
    description: t('METADATA.DESCRIPTION'),
    inLanguage: locale,
    publisher: { '@id': `${baseUrl}/#organization` },
  };
  const webPageSchema: WebPage = {
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    name: t('METADATA.TITLE'),
    description: t('METADATA.DESCRIPTION'),
    url: pageUrl,
    inLanguage: locale,
    isPartOf: { '@id': `${baseUrl}/#website` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${baseUrl}/opengraph-image.png`,
    },
  };

  return (
    <main className={Styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JsonLdArray([
            { ...organizationSchema, '@context': SCHEMA_CONTEXT },
            { ...webSiteSchema, '@context': SCHEMA_CONTEXT },
            { ...webPageSchema, '@context': SCHEMA_CONTEXT },
          ]),
        }}
      />
      <div className={Styles.content}>
        <div className={Styles.textSection}>
          <h1>{t('HEADING')}</h1>
          <div className={Styles.description}>
            <p>{t('INTRO_P1')}</p>
            <p>{t('INTRO_P2')}</p>
            <p>{t('INTRO_P3')}</p>
          </div>
        </div>

        <div className={Styles.imageSection}>
          <Image
            src="/profile_santeri.jpg"
            alt={t('PROFILE_ALT')}
            width={0}
            height={0}
            sizes="350px"
            priority
            quality={100}
            className={Styles.profileImage}
          />
        </div>
      </div>
      <div className={Styles.content}>
        <LogoSlider />
      </div>
      <Projects />
      <div className={Styles.quizSection}>
        <h2 className={Styles.quizTitle}>{t('QUIZ_SECTION_TITLE')}</h2>
        <Quiz />
      </div>
    </main>
  );
}
