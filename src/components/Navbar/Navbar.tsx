import Image from 'next/image';
import Styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={Styles.navbar}>
      <Image
        src="/ora-logo-white.png"
        alt="Logo"
        width={0}
        height={0}
        sizes="500px"
        priority
        quality={100}
        className={Styles.logo}
      />
    </nav>
  );
};

export default Navbar;
