import Heading from "./Heading";
import styles from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Heading text="Footer"/>
    </footer>
  );
}
 
export default Footer;