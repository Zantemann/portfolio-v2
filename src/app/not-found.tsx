import styles from './page.module.css';
import Link from 'next/link';

const NotFound = () => {
  return (
    <main className={styles.main}>
      <h1>Page Not Found</h1>
      <Link
        href="/"
        className={styles.bigButton}
        style={{
          width: '200px',
        }}
      >
        <p>Go to Homepage</p>
      </Link>
    </main>
  );
};

export default NotFound;
