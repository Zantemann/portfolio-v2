'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { LocaleEnum } from '@/i18n/routing';
import Styles from './localeswitcher.module.css';

const LocaleSwitcher = () => {
  const locale = useLocale();
  const t = useTranslations('LOCALE_SWITCHER');
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: LocaleEnum) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className={Styles.switcher}>
      <div className={Styles.switcherButtons}>
        <button
          onClick={() => handleLocaleChange(LocaleEnum.EN)}
          className={`${Styles.button} ${locale === LocaleEnum.EN ? Styles.active : ''}`}
          aria-label={t('ARIA_EN')}
        >
          EN
        </button>
        <button
          onClick={() => handleLocaleChange(LocaleEnum.FI)}
          className={`${Styles.button} ${locale === LocaleEnum.FI ? Styles.active : ''}`}
          aria-label={t('ARIA_FI')}
        >
          FI
        </button>
      </div>
      <div className={Styles.switcherSelect}>
        <label className={Styles.selectLabel} htmlFor="locale-select">
          {t('LABEL')}
        </label>
        <select
          id="locale-select"
          className={Styles.select}
          value={locale}
          onChange={(event) => handleLocaleChange(event.target.value as LocaleEnum)}
          aria-label={t('SELECT_ARIA')}
        >
          <option value={LocaleEnum.EN}>EN</option>
          <option value={LocaleEnum.FI}>FI</option>
        </select>
      </div>
    </div>
  );
};

export default LocaleSwitcher;
