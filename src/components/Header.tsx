import Navbar from "./Navbar";
import styles from '../styles/header.module.scss'
import Image from 'next/image';
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>

      <Link href="/">
        <Image className={styles.logo} src="/suv-svgrepo-com.svg" width={100} height={80} alt="Photo"/>
      </Link>

      <Navbar />

    </header>
  );
}
 
export default Header;