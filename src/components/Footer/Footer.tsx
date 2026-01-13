import Image from 'next/image';
import Link from 'next/link';
import Styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={Styles.container}>
      <h2>Contact</h2>
      <div className={Styles.info}>
        <p>
          Email: <a href="mailto:orasanteri@gmail.com">orasanteri@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+358456971369">+358 45 6971369</a>
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
      <p className={Styles.copyright}>
        © {new Date().getFullYear()} Santeri Ora. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
