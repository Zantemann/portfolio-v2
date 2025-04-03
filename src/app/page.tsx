import Image from 'next/image';
import styles from './page.module.css';
import LogoSlider from '@/components/LogoSlider/LogoSlider';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h1>Welcome to My Portfolio</h1>
          <p>
            Hi, I&apos;m Santeri Ora, a passionate full-stack developer and a second-time founder. I
            specialize in developing various types of web applications, combining technical
            expertise with a strong understanding of business. Currently, I am focused on building
            my company Superwider while also completing my master&apos;s thesis in computer science
            at Tampere University. Let&apos;s connect, and do not forget to check out Superwider!
          </p>
          <div className={styles.buttons}>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <Image src="/logos/linkedin.svg" alt="LinkedIn" width={48} height={48} />
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <Image src="/logos/github.svg" alt="LinkedIn" width={48} height={48} />
            </a>
            <a
              href="https://superwider.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bigButton}
            >
              <Image src="/logos/superwider.svg" alt="Superwider" height={48} width={150} />
            </a>
          </div>
        </div>

        <div className={styles.imageSection}>
          <Image
            src="/profile_santeri.jpg"
            alt="Santeri Ora"
            width={0}
            height={0}
            sizes="350px"
            priority
            quality={100}
            className={styles.profileImage}
          />
        </div>
      </div>
      <div className={styles.content}>
        <LogoSlider />
      </div>
      <Footer />
    </main>
  );
}
