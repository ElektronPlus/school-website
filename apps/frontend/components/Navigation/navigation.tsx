import React from 'react';
import Link from 'next/link';
import Branding from '../Branding/branding';
import styles from './navigation.module.css';
import Search from '../search';

function getLinks(props) {
  return (
    <ul className={styles.menu}>
      {props.navigationRes.map((item) => (
        <li className={styles.menuItem} key={item.uiRouterKey}>
          <Link passHref href={item.path}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Navigation(navigationRes) {
  return (
    <nav className={styles.nav}>
      <header className={styles.header}>
        <Link href="/" passHref>
          <a className={styles.a}>
            <Branding />
          </a>
        </Link>
      </header>
      {getLinks(navigationRes)}
      <Search/>
    </nav>
  );
}
