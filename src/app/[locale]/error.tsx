'use client';

import { useEffect, startTransition } from 'react';
import styles from './page.module.css';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';

const ErrorPage = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  const t = useTranslations('ERROR');
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Error caught by error boundary', error);
    }
  }, [error]);

  const refreshAndReset = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <main className={styles.main} style={{ alignItems: 'start', paddingTop: '100px' }}>
      <div className={styles.textSection}>
        <h1>{t('TITLE')}</h1>
        <p>{t('DESCRIPTION')}</p>
      </div>
      <button onClick={refreshAndReset} className={styles.bigButton} style={{ width: '200px' }}>
        <p>{t('RETRY_BUTTON')}</p>
      </button>
    </main>
  );
};

export default ErrorPage;
