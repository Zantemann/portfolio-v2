'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { LocaleEnum } from '@/i18n/routing';
import Styles from './localeswitcher.module.css';

const LocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: LocaleEnum) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className={Styles.switcher}>
      <button
        onClick={() => handleLocaleChange(LocaleEnum.EN)}
        className={`${Styles.button} ${locale === LocaleEnum.EN ? Styles.active : ''}`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => handleLocaleChange(LocaleEnum.FI)}
        className={`${Styles.button} ${locale === LocaleEnum.FI ? Styles.active : ''}`}
        aria-label="Switch to Finnish"
      >
        FI
      </button>
    </div>
  );
};

export default LocaleSwitcher;
