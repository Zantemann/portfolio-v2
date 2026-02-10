import Image from 'next/image';
import Styles from './page.module.css';
import LogoSlider from '@/components/LogoSlider/LogoSlider';
import Projects from '@/components/Projects/Projects';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('HOME.METADATA');
  const n = await getTranslations('NAVIGATION');

  const videoUrl = 'https://65m1p7kup9.ufs.sh/f/zUUIsnh1aQ3c5S3DHVJfioOFx4wTUbMRnXP01YNjEh8paHv7';

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
      videos: [
        {
          url: videoUrl,
          type: 'video/mp4',
          width: 1920,
          height: 1080,
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

export default async function Home() {
  const t = await getTranslations('HOME');

  return (
    <main className={Styles.main}>
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
    </main>
  );
}
