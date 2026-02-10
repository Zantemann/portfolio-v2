import Image from 'next/image';
import Styles from './logoslider.module.css';
import { Logo } from '@/types/data';
import { getTranslations } from 'next-intl/server';

const LogoSlider = async () => {
  const t = await getTranslations('LOGO_SLIDER');

  const coreTech = [
    { src: '/logos/technologies/nextjs.svg', alt: 'Next.js' },
    { src: '/logos/technologies/nodejs.svg', alt: 'Node.js' },
    { src: '/logos/technologies/react.svg', alt: 'React' },
    { src: '/logos/technologies/typescript.svg', alt: 'TypeScript' },
    { src: '/logos/technologies/mongo.svg', alt: 'MongoDB' },
    { src: '/logos/technologies/docker.svg', alt: 'Docker' },
    { src: '/logos/technologies/git.svg', alt: 'Git' },
    { src: '/logos/technologies/figma.svg', alt: 'Figma' },
  ] as Logo[];

  return (
    <div className={Styles.container}>
      <h2>{t('TITLE')}</h2>
      <div className={Styles.logos}>
        <div className={Styles['logos-slide']}>
          {coreTech.map((image) => (
            <Image src={image.src} alt={image.alt} width={100} height={100} key={image.alt} />
          ))}
        </div>
        <div className={Styles['logos-slide']}>
          {coreTech.map((image) => (
            <Image src={image.src} alt={image.alt} width={100} height={100} key={image.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
