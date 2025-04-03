import Styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={Styles.container}>
      <h3>Contact</h3>
      <div className={Styles.info}>
        <p>
          Email: <a href="mailto:orasanteri@gmail.com">orasanteri@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">+358 45 6971369</a>
        </p>
      </div>
      <p>© {new Date().getFullYear()} Santeri Ora. All rights reserved.</p>
    </div>
  );
};

export default Footer;
