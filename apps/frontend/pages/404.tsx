import Link from 'next/link';
import {Level , H} from 'react-accessible-headings';
import styles from './404.module.css';

export default function Custom404() {
  return (
    <Level>
    <div className={styles.wrapper}>

      <H className={styles.header}><b>404.</b></H>

      <a className={styles.properText}>Może szukałeś czegoś innego? Sprawdź to:</a>

      <div className={styles.divlist}>

      <ul className={styles.listmenu}>
        <li>
          <Link href="/" passHref>
<<<<<<< HEAD
          <a className={styles.menuElement}>Strona Główna</a>
=======
          <a className={styles.menu_element}>Strona główna</a>
>>>>>>> b719c4e3c4a5e52ae68f6adbb4edcb5e2981dd49
          </Link>
        </li>

        <li>
          <Link href="/news" passHref>
          <a className={styles.menuElement}>Aktualności</a>
          </Link>
        </li>

        <li>
          <Link href="/about" passHref>
          <a className={styles.menuElement}>O nas</a>
          </Link>
        </li>
      </ul>

      </div>
    </div>
    </Level>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> b719c4e3c4a5e52ae68f6adbb4edcb5e2981dd49
