import link from 'next/link'
import styles from '../styles/404.module.css'

export default function Custom404() {
  return (
    <div className={styles.wrapper}>

      <h1 className={styles.header}><b>404.</b></h1>

      <a className={styles.properText}>Może szukałeś czegoś innego? Sprawdź to:</a>

      <div className={styles.divlist}>

      <ul className={styles.listmenu}>
        <li>
          <a className={styles.mainref} href="/">Strona Główna</a>
        </li>

        <li>
          <a className={styles.news} href="/news">Aktualności</a>
        </li>

        <li>
          <a className={styles.about} href="/about">O nas</a>
        </li>
      </ul>

      </div>

    </div>

  )
}