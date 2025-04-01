import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.textSection}>
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I&#39;m Santeri Ora. Explore my experience, projects, and startup!</p>
        <div className={styles.buttons}>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.smallButton}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.smallButton}
          >
            GitHub
          </a>
          <a
            href="https://your-startup.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bigButton}
          >
            Visit My Startup
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.imageSection}>
        <Image
          src="/profile_santeri.jpg" // Replace with your image path
          alt="Santeri Ora"
          width={400}
          height={400}
          className={styles.profileImage}
        />
      </div>
    </main>
  );
}
