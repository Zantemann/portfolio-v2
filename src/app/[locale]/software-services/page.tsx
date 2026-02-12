import Styles from './page.module.css';
import { getTranslations } from 'next-intl/server';
import type { WebPage } from 'schema-dts';
import { SCHEMA_CONTEXT, JsonLdArray } from '@/utils/schema';

export async function generateMetadata() {
  const t = await getTranslations('SERVICES.METADATA');
  const n = await getTranslations('NAVIGATION');

  return {
    title: t('TITLE'),
    description: t('DESCRIPTION'),
    openGraph: {
      title: t('TITLE'),
      description: t('DESCRIPTION'),
      url: n('SERVICES.PATH'),
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
      canonical: `${process.env.NEXT_PUBLIC_URL}${n('SERVICES.PATH')}`,
      languages: {
        en: `${process.env.NEXT_PUBLIC_URL}/software-services`,
        fi: `${process.env.NEXT_PUBLIC_URL}/fi/ohjelmistopalvelut`,
      },
    },
  };
}

const ServicesPage = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const t = await getTranslations('SERVICES');
  const n = await getTranslations('NAVIGATION');
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
  const pageUrl = `${baseUrl}${n('SERVICES.PATH')}`;

  const webPageSchema: WebPage = {
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    name: t('METADATA.TITLE'),
    url: pageUrl,
    description: t('METADATA.DESCRIPTION'),
    inLanguage: locale,
    isPartOf: { '@id': `${baseUrl}/#website` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${baseUrl}/opengraph-image.png`,
    },
  };
  const exampleLinks = {
    SUPERWIDER: 'https://superwider.com',
    PUMPPILAB: 'https://pumppilab.com',
    VALITAN: 'https://www.xn--vlitn-grad.fi',
    STEIERMARKS: 'https://steiermarks.fi',
  } as const;

  return (
    <main className={Styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JsonLdArray([{ ...webPageSchema, '@context': SCHEMA_CONTEXT }]),
        }}
      />
      <div className={Styles.header}>
        <h1>{t('TITLE')}</h1>
        <p>{t('INTRO')}</p>
      </div>

      {/* Section I: Engineering & Development */}
      <section className={Styles.section}>
        <h2 className={Styles.sectionTitle}>
          <span className={Styles.sectionNumber}>I.</span>
          {t('SECTION_1.TITLE')}
        </h2>
        <p className={Styles.sectionSubtitle}>{t('SECTION_1.SUBTITLE')}</p>

        <div className={Styles.benefitsList}>
          <h4>{t('SECTION_1.KEY_BENEFITS.TITLE')}</h4>
          <ul className={Styles.list}>
            <li>
              <strong>{t('SECTION_1.KEY_BENEFITS.BENEFIT_1.TITLE')}</strong>{' '}
              {t('SECTION_1.KEY_BENEFITS.BENEFIT_1.DESCRIPTION')}
            </li>
            <li>
              <strong>{t('SECTION_1.KEY_BENEFITS.BENEFIT_2.TITLE')}</strong>{' '}
              {t('SECTION_1.KEY_BENEFITS.BENEFIT_2.DESCRIPTION')}
            </li>
            <li>
              <strong>{t('SECTION_1.KEY_BENEFITS.BENEFIT_3.TITLE')}</strong>{' '}
              {t('SECTION_1.KEY_BENEFITS.BENEFIT_3.DESCRIPTION')}
            </li>
            <li>
              <strong>{t('SECTION_1.KEY_BENEFITS.BENEFIT_4.TITLE')}</strong>{' '}
              {t('SECTION_1.KEY_BENEFITS.BENEFIT_4.DESCRIPTION')}
            </li>
          </ul>
        </div>

        <div className={Styles.serviceBlock}>
          <div className={Styles.serviceHeader}>
            <span className={Styles.serviceNumber}>01.</span>
            <h3>{t('SECTION_1.SERVICE_1.TITLE')}</h3>
          </div>
          <p className={Styles.serviceLead}>{t('SECTION_1.SERVICE_1.LEAD')}</p>
          <p className={Styles.serviceDescription}>{t('SECTION_1.SERVICE_1.DESCRIPTION')}</p>

          <p className={Styles.example}>
            <strong>{t('COMMON.EXAMPLE')}</strong>{' '}
            <a
              href={exampleLinks.SUPERWIDER}
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.exampleLink}
            >
              {t('EXAMPLES.ITEMS.SUPERWIDER.TITLE')}
            </a>
            : {t('SECTION_1.SERVICE_1.EXAMPLE')}
          </p>
        </div>

        <div className={Styles.serviceBlock}>
          <div className={Styles.serviceHeader}>
            <span className={Styles.serviceNumber}>02.</span>
            <h3>{t('SECTION_1.SERVICE_2.TITLE')}</h3>
          </div>
          <p className={Styles.serviceLead}>{t('SECTION_1.SERVICE_2.LEAD')}</p>
          <p className={Styles.serviceDescription}>{t('SECTION_1.SERVICE_2.DESCRIPTION')}</p>

          <p className={Styles.example}>
            <strong>{t('COMMON.EXAMPLE')}</strong>{' '}
            <a
              href={exampleLinks.VALITAN}
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.exampleLink}
            >
              {t('EXAMPLES.ITEMS.VALITAN.TITLE')}
            </a>
            : {t('SECTION_1.SERVICE_2.EXAMPLE')}
          </p>
        </div>
      </section>

      {/* Section II: Commerce & Growth */}
      <section className={Styles.section}>
        <h2 className={Styles.sectionTitle}>
          <span className={Styles.sectionNumber}>II.</span>
          {t('SECTION_2.TITLE')}
        </h2>
        <p className={Styles.sectionSubtitle}>{t('SECTION_2.SUBTITLE')}</p>

        <div className={Styles.serviceBlock}>
          <div className={Styles.serviceHeader}>
            <span className={Styles.serviceNumber}>03.</span>
            <h3>{t('SECTION_2.SERVICE_1.TITLE')}</h3>
          </div>
          <p className={Styles.serviceLead}>{t('SECTION_2.SERVICE_1.LEAD')}</p>
          <p className={Styles.serviceDescription}>{t('SECTION_2.SERVICE_1.DESCRIPTION')}</p>

          <div className={Styles.subsection}>
            <h4>{t('SECTION_2.SERVICE_1.BENEFITS.TITLE')}</h4>
            <ul className={Styles.list}>
              <li>
                <strong>{t('SECTION_2.SERVICE_1.BENEFITS.BENEFIT_1.TITLE')}</strong>{' '}
                {t('SECTION_2.SERVICE_1.BENEFITS.BENEFIT_1.DESCRIPTION')}
              </li>
              <li>
                <strong>{t('SECTION_2.SERVICE_1.BENEFITS.BENEFIT_2.TITLE')}</strong>{' '}
                {t('SECTION_2.SERVICE_1.BENEFITS.BENEFIT_2.DESCRIPTION')}
              </li>
              <li>
                <strong>{t('SECTION_2.SERVICE_1.BENEFITS.BENEFIT_3.TITLE')}</strong>{' '}
                {t('SECTION_2.SERVICE_1.BENEFITS.BENEFIT_3.DESCRIPTION')}
              </li>
            </ul>
          </div>

          <p className={Styles.example}>
            <strong>{t('COMMON.EXAMPLE')}</strong>{' '}
            <a
              href={exampleLinks.PUMPPILAB}
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.exampleLink}
            >
              {t('EXAMPLES.ITEMS.PUMPPILAB.TITLE')}
            </a>
            : {t('SECTION_2.SERVICE_1.EXAMPLE')}
          </p>
        </div>

        <div className={Styles.serviceBlock}>
          <div className={Styles.serviceHeader}>
            <span className={Styles.serviceNumber}>04.</span>
            <h3>{t('SECTION_2.SERVICE_2.TITLE')}</h3>
          </div>
          <p className={Styles.serviceLead}>{t('SECTION_2.SERVICE_2.LEAD')}</p>
          <p className={Styles.serviceDescription}>{t('SECTION_2.SERVICE_2.DESCRIPTION')}</p>

          <div className={Styles.subsection}>
            <h4>{t('SECTION_2.SERVICE_2.PACKAGE.TITLE')}</h4>
            <ul className={Styles.list}>
              <li>
                <strong>{t('SECTION_2.SERVICE_2.PACKAGE.ITEM_1.TITLE')}</strong>{' '}
                {t('SECTION_2.SERVICE_2.PACKAGE.ITEM_1.DESCRIPTION')}
              </li>
              <li>
                <strong>{t('SECTION_2.SERVICE_2.PACKAGE.ITEM_2.TITLE')}</strong>{' '}
                {t('SECTION_2.SERVICE_2.PACKAGE.ITEM_2.DESCRIPTION')}
              </li>
              <li>
                <strong>{t('SECTION_2.SERVICE_2.PACKAGE.ITEM_3.TITLE')}</strong>{' '}
                {t('SECTION_2.SERVICE_2.PACKAGE.ITEM_3.DESCRIPTION')}
              </li>
              <li>
                <strong>{t('SECTION_2.SERVICE_2.PACKAGE.ITEM_4.TITLE')}</strong>{' '}
                {t('SECTION_2.SERVICE_2.PACKAGE.ITEM_4.DESCRIPTION')}
              </li>
              <li>
                <strong>{t('SECTION_2.SERVICE_2.PACKAGE.ITEM_5.TITLE')}</strong>{' '}
                {t('SECTION_2.SERVICE_2.PACKAGE.ITEM_5.DESCRIPTION')}
              </li>
            </ul>
          </div>

          <p className={Styles.example}>
            <strong>{t('COMMON.EXAMPLE')}</strong>{' '}
            <a
              href={exampleLinks.SUPERWIDER}
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.exampleLink}
            >
              {t('EXAMPLES.ITEMS.SUPERWIDER.TITLE')}
            </a>
            : {t('SECTION_2.SERVICE_2.EXAMPLE')}
          </p>
        </div>
      </section>

      {/* Why Work With Me section */}
      <section className={Styles.section}>
        <h2 className={Styles.sectionTitle}>{t('WHY_ME.TITLE')}</h2>
        <p className={Styles.sectionSubtitle}>{t('WHY_ME.SUBTITLE')}</p>

        <div className={Styles.reasonsGrid}>
          <div className={Styles.reasonCard}>
            <h4>{t('WHY_ME.REASON_1.TITLE')}</h4>
            <p>{t('WHY_ME.REASON_1.DESCRIPTION')}</p>
          </div>
          <div className={Styles.reasonCard}>
            <h4>{t('WHY_ME.REASON_2.TITLE')}</h4>
            <p>{t('WHY_ME.REASON_2.DESCRIPTION')}</p>
          </div>
          <div className={Styles.reasonCard}>
            <h4>{t('WHY_ME.REASON_3.TITLE')}</h4>
            <p>{t('WHY_ME.REASON_3.DESCRIPTION')}</p>
          </div>
          <div className={Styles.reasonCard}>
            <h4>{t('WHY_ME.REASON_4.TITLE')}</h4>
            <p>{t('WHY_ME.REASON_4.DESCRIPTION')}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
