import Image from 'next/image';
import Link from 'next/link';
import Styles from './page.module.css';
import LogoSlider from '@/components/LogoSlider/LogoSlider';

export default function Home() {
  return (
    <main className={Styles.main}>
      <div className={Styles.content}>
        <div className={Styles.textSection}>
          <h1>Welcome to My Portfolio</h1>
          <p>
            Hi, I&apos;m Santeri Ora, a passionate full-stack developer and a second-time founder. I
            specialize in developing various types of web applications, combining technical
            expertise with a strong understanding of business. Currently, I&apos;m focused on
            building my company Superwider while also completing my master&apos;s thesis in computer
            science at Tampere University. Let&apos;s connect, and don&apos;t forget to check out
            Superwider!
          </p>
          <div className={Styles.buttons}>
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
            <Link
              href="https://superwider.com"
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.bigButton}
            >
              <Image src="/logos/superwider.svg" alt="Superwider" height={48} width={150} />
            </Link>
          </div>
        </div>

        <div className={Styles.imageSection}>
          <Image
            src="/profile_santeri.jpg"
            alt="Santeri Ora"
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
    </main>
  );
}
