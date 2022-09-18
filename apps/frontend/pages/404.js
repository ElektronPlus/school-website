import link from 'next/link'
import styles from '../styles/404.module.css'

export default function Custom404() {
  return (
    <div className={styles.papiez}>

      <h1 className={styles.one}><b>404.</b></h1>

      <a className={styles.txt2}>Może szukałeś czegoś innego? Sprawdź to:</a>

      <br></br>
      <br></br>
      <div className={styles.divlist}>

      <ul className={styles.listmenu}>
        <li>
          <a className={styles.mainref} href="/">Strona Główna</a>
        </li>
        <br></br>
        <li>
          <a className={styles.news} href="/news">Aktualności</a>
        </li>
        <br></br>
        <li>
          <a className={styles.about} href="/about">O nas</a>
        </li>
      </ul>

      </div>

    </div>

  )
}