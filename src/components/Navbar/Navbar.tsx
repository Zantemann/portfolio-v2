import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import Styles from './navbar.module.css';
import { getTranslations } from 'next-intl/server';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';

const Navbar = async () => {
  const t = await getTranslations('NAVBAR');

  return (
    <nav className={Styles.navbar}>
      <div className={Styles.navLeft}>
        <Link href="/">
          <Image
            src="/ora-logo-white.png"
            alt={t('LOGO_ALT')}
            width={0}
            height={0}
            sizes="500px"
            priority
            quality={100}
            className={Styles.logo}
          />
        </Link>
        <Link href="/services" className={`${Styles.navLink} ${Styles.navLinkAccent}`}>
          {t('SERVICES_LABEL')}
        </Link>
      </div>
      <div className={Styles.navActions}>
        <LocaleSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
