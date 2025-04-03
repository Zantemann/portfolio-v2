import Image from 'next/image';
import Styles from './logoslider.module.css';
import { Logo } from '@/types/data';

const coreTech = [
  { src: '/logos/nextjs.svg', alt: 'Next.js' },
  { src: '/logos/nodejs.svg', alt: 'Node.js' },
  { src: '/logos/react.svg', alt: 'React' },
  { src: '/logos/typescript.svg', alt: 'TypeScript' },
  { src: '/logos/mongo.svg', alt: 'MongoDB' },
  { src: '/logos/docker.svg', alt: 'Docker' },
  { src: '/logos/git.svg', alt: 'Git' },
  { src: '/logos/figma.svg', alt: 'Figma' },
] as Logo[];

const LogoSlider = () => {
  return (
    <div className={Styles.container} style={{ overflow: 'hidden' }}>
      <h2>Core Expertise</h2>
      <div className={Styles.logos}>
        <div className={Styles['logos-slide']}>
          {coreTech.map((image, index) => (
            <Image src={image.src} alt={image.alt} width={100} height={100} key={index} />
          ))}
        </div>
        <div className={Styles['logos-slide']}>
          {coreTech.map((image, index) => (
            <Image src={image.src} alt={image.alt} width={100} height={100} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
