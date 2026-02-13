import Styles from './page.module.css';
import Quiz from '@/components/Quiz/Quiz';
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

  const sectionOneBenefits = {
    title: t('SECTION_1.KEY_BENEFITS.TITLE'),
    items: [
      {
        title: t('SECTION_1.KEY_BENEFITS.BENEFIT_1.TITLE'),
        description: t('SECTION_1.KEY_BENEFITS.BENEFIT_1.DESCRIPTION'),
      },
      {
        title: t('SECTION_1.KEY_BENEFITS.BENEFIT_2.TITLE'),
        description: t('SECTION_1.KEY_BENEFITS.BENEFIT_2.DESCRIPTION'),
      },
      {
        title: t('SECTION_1.KEY_BENEFITS.BENEFIT_3.TITLE'),
        description: t('SECTION_1.KEY_BENEFITS.BENEFIT_3.DESCRIPTION'),
      },
      {
        title: t('SECTION_1.KEY_BENEFITS.BENEFIT_4.TITLE'),
        description: t('SECTION_1.KEY_BENEFITS.BENEFIT_4.DESCRIPTION'),
      },
    ],
  };

  type DetailItem = { title: string; description: string };
  type Service = {
    id: string;
    number: string;
    title: string;
    lead: string;
    description: string;
    details?: {
      title: string;
      items: DetailItem[];
    };
    example: {
      link: string;
      label: string;
      text: string;
    };
  };
  type Section = {
    number: string;
    title: string;
    subtitle: string;
    services: Service[];
  };

  const sections: Section[] = [
    {
      number: 'I.',
      title: t('SECTION_1.TITLE'),
      subtitle: t('SECTION_1.SUBTITLE'),
      services: [
        {
          id: n('SERVICES.ANCHORS.CUSTOM'),
          number: '01.',
          title: t('SECTION_1.SERVICE_1.TITLE'),
          lead: t('SECTION_1.SERVICE_1.LEAD'),
          description: t('SECTION_1.SERVICE_1.DESCRIPTION'),
          details: sectionOneBenefits,
          example: {
            link: exampleLinks.SUPERWIDER,
            label: t('EXAMPLES.ITEMS.SUPERWIDER.TITLE'),
            text: t('SECTION_1.SERVICE_1.EXAMPLE'),
          },
        },
        {
          id: n('SERVICES.ANCHORS.MODERNIZATION'),
          number: '02.',
          title: t('SECTION_1.SERVICE_2.TITLE'),
          lead: t('SECTION_1.SERVICE_2.LEAD'),
          description: t('SECTION_1.SERVICE_2.DESCRIPTION'),
          details: sectionOneBenefits,
          example: {
            link: exampleLinks.VALITAN,
            label: t('EXAMPLES.ITEMS.VALITAN.TITLE'),
            text: t('SECTION_1.SERVICE_2.EXAMPLE'),
          },
        },
      ],
    },
    {
      number: 'II.',
      title: t('SECTION_2.TITLE'),
      subtitle: t('SECTION_2.SUBTITLE'),
      services: [
        {
          id: n('SERVICES.ANCHORS.SHOPIFY'),
          number: '03.',
          title: t('SECTION_2.SERVICE_1.TITLE'),
          lead: t('SECTION_2.SERVICE_1.LEAD'),
          description: t('SECTION_2.SERVICE_1.DESCRIPTION'),
          details: {
            title: t('SECTION_2.SERVICE_1.BENEFITS.TITLE'),
            items: [
              {
                title: t('SECTION_2.SERVICE_1.BENEFITS.BENEFIT_1.TITLE'),
                description: t('SECTION_2.SERVICE_1.BENEFITS.BENEFIT_1.DESCRIPTION'),
              },
              {
                title: t('SECTION_2.SERVICE_1.BENEFITS.BENEFIT_2.TITLE'),
                description: t('SECTION_2.SERVICE_1.BENEFITS.BENEFIT_2.DESCRIPTION'),
              },
              {
                title: t('SECTION_2.SERVICE_1.BENEFITS.BENEFIT_3.TITLE'),
                description: t('SECTION_2.SERVICE_1.BENEFITS.BENEFIT_3.DESCRIPTION'),
              },
            ],
          },
          example: {
            link: exampleLinks.PUMPPILAB,
            label: t('EXAMPLES.ITEMS.PUMPPILAB.TITLE'),
            text: t('SECTION_2.SERVICE_1.EXAMPLE'),
          },
        },
        {
          id: n('SERVICES.ANCHORS.SEO'),
          number: '04.',
          title: t('SECTION_2.SERVICE_2.TITLE'),
          lead: t('SECTION_2.SERVICE_2.LEAD'),
          description: t('SECTION_2.SERVICE_2.DESCRIPTION'),
          details: {
            title: t('SECTION_2.SERVICE_2.PACKAGE.TITLE'),
            items: [
              {
                title: t('SECTION_2.SERVICE_2.PACKAGE.ITEM_1.TITLE'),
                description: t('SECTION_2.SERVICE_2.PACKAGE.ITEM_1.DESCRIPTION'),
              },
              {
                title: t('SECTION_2.SERVICE_2.PACKAGE.ITEM_2.TITLE'),
                description: t('SECTION_2.SERVICE_2.PACKAGE.ITEM_2.DESCRIPTION'),
              },
              {
                title: t('SECTION_2.SERVICE_2.PACKAGE.ITEM_3.TITLE'),
                description: t('SECTION_2.SERVICE_2.PACKAGE.ITEM_3.DESCRIPTION'),
              },
              {
                title: t('SECTION_2.SERVICE_2.PACKAGE.ITEM_4.TITLE'),
                description: t('SECTION_2.SERVICE_2.PACKAGE.ITEM_4.DESCRIPTION'),
              },
            ],
          },
          example: {
            link: exampleLinks.SUPERWIDER,
            label: t('EXAMPLES.ITEMS.SUPERWIDER.TITLE'),
            text: t('SECTION_2.SERVICE_2.EXAMPLE'),
          },
        },
      ],
    },
  ];

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

      {/* Quiz Section */}
      <Quiz />

      {sections.map((section) => (
        <section key={section.number} className={Styles.section}>
          <h2 className={Styles.sectionTitle}>
            <span className={Styles.sectionNumber}>{section.number}</span>
            {section.title}
          </h2>
          <p className={Styles.sectionSubtitle}>{section.subtitle}</p>

          {section.services.map((service) => (
            <div key={service.number} className={Styles.serviceBlock} id={service.id}>
              <div className={Styles.serviceHeader}>
                <span className={Styles.serviceNumber}>{service.number}</span>
                <h3>{service.title}</h3>
              </div>
              <p className={Styles.serviceLead}>{service.lead}</p>
              {service.description ? (
                <p className={Styles.serviceDescription}>{service.description}</p>
              ) : null}

              {service.details ? (
                <div className={Styles.subsection}>
                  <h4>{service.details.title}</h4>
                  <ul className={Styles.list}>
                    {service.details.items.map((item) => (
                      <li key={item.title}>
                        <strong>{item.title}</strong> {item.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

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
                : {service.example.text}
              </p>
            </div>
          ))}
        </section>
      ))}

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
