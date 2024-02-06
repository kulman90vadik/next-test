import Head from "next/head";
import { FC } from "react";
import styles from '../styles/socials.module.scss'

type Props = {
  socials: socialsType[]
}

const Socials: FC<Props> = ({socials}) => {

  if(!socials) { return null}


  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
    </Head>
    
    <ul className={styles.socials}>
      {socials && socials.map(item => (
        <li className={styles.item} key={item.id}>
          <a className={styles.link} href={item.path} target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-${item.icon}`} aria-hidden="true" />
          </a>
        </li>
      ))}
     </ul>
    </>
  );
}
 
export default Socials;