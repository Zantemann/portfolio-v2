import Image from 'next/image';
import Link from 'next/link';
import Styles from './projects.module.css';
import { getTranslations } from 'next-intl/server';

const Projects = async () => {
  const t = await getTranslations('PROJECTS');

  const projects = [
    {
      href: 'https://superwider.com',
      logo: '/logos/projects/superwider.svg',
      alt: 'Superwider',
    },
    {
      href: 'https://pumppilab.com',
      logo: '/logos/projects/pumppilab.svg',
      alt: 'Pumppilab',
    },
    {
      href: 'https://www.xn--vlitn-grad.fi',
      logo: '/logos/projects/valitan.svg',
      alt: 'Välitän LKV',
    },
    {
      href: 'https://steiermarks.fi',
      logo: '/logos/projects/steiermarks.svg',
      alt: 'Steiermarks',
    },
  ];

  return (
    <div className={Styles.projectsContainer}>
      <h2>{t('TITLE')}</h2>
      <div className={Styles.projectsGrid}>
        {projects.map((project) => (
          <Link
            key={project.href}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={Styles.projectCard}
          >
            <div className={Styles.projectLogoFrame}>
              <Image
                src={project.logo}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 60vw, (max-width: 1024px) 30vw, 20vw"
                className={Styles.projectLogo}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
