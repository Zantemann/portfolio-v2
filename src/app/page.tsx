import Image from 'next/image';
import Styles from './page.module.css';
import LogoSlider from '@/components/LogoSlider/LogoSlider';
import Projects from '@/components/Projects/Projects';

export default function Home() {
  return (
    <main className={Styles.main}>
      <div className={Styles.content}>
        <div className={Styles.textSection}>
          <h1>Welcome to My Portfolio</h1>
          <div className={Styles.description}>
            <p>
              Hi, I&apos;m Santeri Ora, a Lean-driven full-stack developer and a second-time
              founder. I specialize in building scalable web applications, combining deep technical
              expertise with a strong business understanding.
            </p>
            <p>
              I graduated at the end of 2025 with a Master&apos;s degree in Computer Science from
              Tampere University. Currently, I am focused on scaling my company, Superwider, where I
              am building a data-driven platform that automates performance-based influencer
              marketing through social media integrations.
            </p>
            <p>
              I&apos;m passionate about solving complex technical challenges and turning business
              needs into efficient software solutions. Let&apos;s connect, and don&apos;t forget to
              check out Superwider!
            </p>
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
      <Projects />
    </main>
  );
}
