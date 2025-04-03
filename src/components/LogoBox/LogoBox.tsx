import Styles from './logobox.module.css';
/*
import { Logo } from '@/types/data';

const secondaryTech = [
  { src: '/logos/aws.svg', alt: 'Amazon Web Services' },
  { src: '/logos/cplusplus.svg', alt: 'C++' },
  { src: '/logos/java.svg', alt: 'Java' },
  { src: '/logos/python.svg', alt: 'Python' },
  { src: '/logos/kotlin.svg', alt: 'Kotlin' },
  { src: '/logos/mysql.svg', alt: 'MySQL' },
] as Logo[];
*/

const LogoBox = () => {
  return <div className={Styles.container} style={{ overflow: 'hidden' }}></div>;
};

export default LogoBox;
