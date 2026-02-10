'use client';

import styles from './page.module.css';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const NotFound = () => {
  const t = useTranslations('NOT_FOUND');

  return (
    <main className={styles.main}>
      <h1>{t('TITLE')}</h1>
      <Link
        href="/"
        className={styles.bigButton}
        style={{
          width: '200px',
        }}
      >
        <p>{t('HOME_BUTTON')}</p>
      </Link>
    </main>
  );
};

export default NotFound;
