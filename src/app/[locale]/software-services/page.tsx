import Styles from './page.module.css';
import Quiz from '@/components/Quiz/Quiz';
import FAQ from '@/components/FAQ/FAQ';
import ProcessTimeline from '@/components/ProcessTimeline/ProcessTimeline';
import { getTranslations } from 'next-intl/server';
import type { WebPage, FAQPage } from 'schema-dts';
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

  const exampleLinks = {
    SUPERWIDER: 'https://superwider.com',
    PUMPPILAB: 'https://pumppilab.com',
    VALITAN: 'https://www.xn--vlitn-grad.fi',
    STEIERMARKS: 'https://steiermarks.fi',
  } as const;

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
  type ServiceCard = {
    title: string;
    description: string;
    points: string[];
    example: {
      link: string;
      label: string;
    };
  };

  const services: ServiceCard[] = [
    {
      title: t('SERVICE_1.TITLE'),
      description: t('SERVICE_1.DESC'),
      points: [t('SERVICE_1.POINTS.0'), t('SERVICE_1.POINTS.1'), t('SERVICE_1.POINTS.2')],
      example: {
        link: exampleLinks.SUPERWIDER,
        label: t('EXAMPLES.ITEMS.SUPERWIDER.TITLE'),
      },
    },
    {
      title: t('SERVICE_2.TITLE'),
      description: t('SERVICE_2.DESC'),
      points: [t('SERVICE_2.POINTS.0'), t('SERVICE_2.POINTS.1'), t('SERVICE_2.POINTS.2')],
      example: {
        link: exampleLinks.VALITAN,
        label: t('EXAMPLES.ITEMS.VALITAN.TITLE'),
      },
    },
    {
      title: t('SERVICE_3.TITLE'),
      description: t('SERVICE_3.DESC'),
      points: [t('SERVICE_3.POINTS.0'), t('SERVICE_3.POINTS.1'), t('SERVICE_3.POINTS.2')],
      example: {
        link: exampleLinks.PUMPPILAB,
        label: t('EXAMPLES.ITEMS.PUMPPILAB.TITLE'),
      },
    },
    {
      title: t('SERVICE_4.TITLE'),
      description: t('SERVICE_4.DESC'),
      points: [t('SERVICE_4.POINTS.0'), t('SERVICE_4.POINTS.1'), t('SERVICE_4.POINTS.2')],
      example: {
        link: exampleLinks.SUPERWIDER,
        label: t('EXAMPLES.ITEMS.SUPERWIDER.TITLE'),
      },
    },
  ];

  // Build FAQ items for schema
  const faqItems = [
    { question: t('FAQ.ITEM_1.Q'), answer: t('FAQ.ITEM_1.A') },
    { question: t('FAQ.ITEM_2.Q'), answer: t('FAQ.ITEM_2.A') },
    { question: t('FAQ.ITEM_3.Q'), answer: t('FAQ.ITEM_3.A') },
    { question: t('FAQ.ITEM_4.Q'), answer: t('FAQ.ITEM_4.A') },
    { question: t('FAQ.ITEM_5.Q'), answer: t('FAQ.ITEM_5.A') },
    { question: t('FAQ.ITEM_6.Q'), answer: t('FAQ.ITEM_6.A') },
    { question: t('FAQ.ITEM_7.Q'), answer: t('FAQ.ITEM_7.A') },
    { question: t('FAQ.ITEM_8.Q'), answer: t('FAQ.ITEM_8.A') },
  ];

  // Build FAQ schema
  const faqSchema: FAQPage = {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    name: t('FAQ.TITLE'),
    url: pageUrl,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <main className={Styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JsonLdArray([
            { ...webPageSchema, '@context': SCHEMA_CONTEXT },
            { ...faqSchema, '@context': SCHEMA_CONTEXT },
          ]),
        }}
      />
      <div className={Styles.header}>
        <h1>{t('TITLE')}</h1>
      </div>

      <p className={Styles.generalDescription}>{t('GENERAL_DESCRIPTION')}</p>

      <section className="section">
        <h2 className="section-title">{t('SERVICES_HEADING')}</h2>
        <div className={Styles.servicesGrid}>
          {services.map((service) => (
            <article key={service.title} className={Styles.serviceCard}>
              <h3 className="text-accent">{service.title}</h3>
              <p className={Styles.serviceCardDesc}>{service.description}</p>
              <ul className={Styles.servicePoints}>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className={Styles.example}>
                <strong>{t('COMMON.EXAMPLE')}</strong>{' '}
                <a
                  href={service.example.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={Styles.exampleLink}
                >
                  {service.example.label}
                </a>
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz />

      {/* Why Work With Me section */}
      <section className="section">
        <h2 className="section-title">{t('WHY_ME.TITLE')}</h2>
        <p className="section-subtitle">{t('WHY_ME.SUBTITLE')}</p>

        <div className={Styles.reasonsGrid}>
          <div className={Styles.reasonCard}>
            <h3 className="text-accent">{t('WHY_ME.REASON_1.TITLE')}</h3>
            <p>{t('WHY_ME.REASON_1.DESCRIPTION')}</p>
          </div>
          <div className={Styles.reasonCard}>
            <h3 className="text-accent">{t('WHY_ME.REASON_2.TITLE')}</h3>
            <p>{t('WHY_ME.REASON_2.DESCRIPTION')}</p>
          </div>
          <div className={Styles.reasonCard}>
            <h3 className="text-accent">{t('WHY_ME.REASON_3.TITLE')}</h3>
            <p>{t('WHY_ME.REASON_3.DESCRIPTION')}</p>
          </div>
          <div className={Styles.reasonCard}>
            <h3 className="text-accent">{t('WHY_ME.REASON_4.TITLE')}</h3>
            <p>{t('WHY_ME.REASON_4.DESCRIPTION')}</p>
          </div>
        </div>
      </section>
      <ProcessTimeline />
      <FAQ />
    </main>
  );
};

export default ServicesPage;
