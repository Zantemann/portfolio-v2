import Image from 'next/image';
import Link from 'next/link';
import Styles from './footer.module.css';
import { getTranslations } from 'next-intl/server';

const Footer = async () => {
  const t = await getTranslations('FOOTER');
  const currentYear = new Date().getFullYear();

  return (
    <div className={Styles.container}>
      <h2>{t('TITLE')}</h2>
      <div className={Styles.info}>
        <p>
          {t('EMAIL_LABEL')} <a href="mailto:orasanteri@gmail.com">orasanteri@gmail.com</a>
        </p>
        <p>
          {t('PHONE_LABEL')} <a href="tel:+358456971369">+358 45 6971369</a>
        </p>
        <div className={Styles.socialLinks}>
          <Link
            href="https://linkedin.com/in/santeriora"
            target="_blank"
            rel="noopener noreferrer"
            className={Styles.socialButton}
          >
            <Image src="/logos/linkedin.svg" alt="LinkedIn" width={48} height={48} />
          </Link>
          <Link
            href="https://github.com/zantemann"
            target="_blank"
            rel="noopener noreferrer"
            className={Styles.socialButton}
          >
            <Image src="/logos/github.svg" alt="GitHub" width={48} height={48} />
          </Link>
        </div>
      </div>
      <p className={Styles.copyright}>{t('COPYRIGHT', { year: currentYear.toString() })}</p>
    </div>
  );
};

export default Footer;
