import React from 'react';
import Link from 'next/link';
import Branding from './branding';
import styles from './navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <header className={styles.header}>
        <Link href="/" passHref>
          <a className={styles.a}>
            <Branding />
          </a>
        </Link>
      </header>
    </nav>
  );
}
