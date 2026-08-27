import styles from './Header.module.css'
import { House, Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.item} ${styles.brand}`}>
        <House className={styles.icon}/>
        <span className={styles.span}>Cambridge Rentals</span>
      </div>
      <div className={`${styles.item} ${styles.contact}`}>
        <Phone className={styles.icon} />
        <span className={styles.span}>(555) 123-4567 </span>
      </div>
       <div className={`${styles.item} ${styles.contact}`}>
        <Mail className={styles.icon}/>
        <span className={styles.span}>support@cambridgerentals.com </span>
      </div>
    </header>
  )
}
