import Link from 'next/link';
import {Level , H} from 'react-accessible-headings';
import styles from './404.module.css';

export default function Custom404() {
  return (
    <div className={styles.wrapper}>
    <Level>
      <H className={styles.header}><b>404.</b></H>

      <a className={styles.properText}>Może szukałeś czegoś innego? Sprawdź to:</a>

      <div className={styles.divlist}>

      <ul className={styles.listmenu}>
        <li>
          <Link href="/" passHref>
          <a className={styles.menuElement}>Strona Główna</a>
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
      </Level>
    </div>

  )
}