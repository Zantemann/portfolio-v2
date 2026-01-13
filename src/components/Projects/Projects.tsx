import Image from 'next/image';
import Link from 'next/link';
import Styles from './projects.module.css';

const Projects = () => {
  return (
    <div className={Styles.projectsContainer}>
      <h2>Projects</h2>
      <Link
        href="https://superwider.com"
        target="_blank"
        rel="noopener noreferrer"
        className={Styles.projectCard}
      >
        <Image
          src="/logos/projects/superwider.svg"
          alt="Superwider"
          width={200}
          height={48}
          className={Styles.projectLogo}
        />
      </Link>
    </div>
  );
};

export default Projects;
