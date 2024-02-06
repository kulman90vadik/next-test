import styles from '@/styles/person.module.scss'
import { FC } from 'react';

type Props = {
  contact: usersType
}

const ContactPerson:FC<Props> = ({contact}) => {
  return (
    <div className={styles.person}>
      <div> 
      {contact.name}
      </div>
      <div>
      {contact.email}
      </div>
    </div>
  );
}
 
export default ContactPerson;