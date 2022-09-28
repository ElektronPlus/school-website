import Link from 'next/link'
import styles from '404.module.css'

export default function Custom404() {
  return (
    <div className={styles.wrapper}>

      <h1 className={styles.header}><b>404.</b></h1>

      <a className={styles.properText}>Może szukałeś czegoś innego? Sprawdź to:</a>

      <div className={styles.divlist}>

      <ul className={styles.listmenu}>
        <li>
          <Link href="/">
          <a className={styles.reflinks}>Strona Główna</a>
          </Link>
        </li>

        <li>
          <Link href="/news">
          <a className={styles.reflinks}>Aktualności</a>
          </Link>
        </li>

        <li>
          <Link href="/about">
          <a className={styles.reflinks}>O nas</a>
          </Link>
        </li>
      </ul>

      </div>

    </div>

  )
}