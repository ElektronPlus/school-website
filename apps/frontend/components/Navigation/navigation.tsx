import React from 'react';
import Link from 'next/link';
import Branding from '../Branding/branding';
import Search from '../search';
import { css } from '@emotion/react';

function getLinks(props) {
  return (
    <ul
      css={css`
        padding: 0;
        width: 100%;
        margin: 0;
        @media only screen and (min-width: 768px) {
          display: flex;
          align-items: center;
          align-content: space-between;
          gap: 32px;
        }
      `}
    >
      {props.navigationRes.map((item) => (
        <li
          css={css`
            max-width: 100%;
            list-style-type: none;
            text-align: center;
          `}
          key={item.uiRouterKey}
        >
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
    <nav
      css={css`
        padding: 16px;
        @media only screen and (min-width: 768px) {
          display: flex;
          align-items: center;
          gap: 16px;
        }
      `}
    >
      <header
        css={css`
          width: 100%;
        `}
      >
        <Link href="/" passHref>
          <a>
            <Branding />
          </a>
        </Link>
      </header>
      {getLinks(navigationRes)}
      <Search />
    </nav>
  );
}
