import React from 'react';
import Link from 'next/link';
import Branding from '../Branding/branding';
import Search from '../search';
import { css } from '@emotion/react';
import { GetAlertQuery } from 'generated/graphql';
import { Alert } from 'components/Navigation/alert';

function getLinks({ navigationRes }) {
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
      {navigationRes.map((item) => (
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

export default function Navigation({
  navigationRes,
  alertData,
}: {
  navigationRes: object;
  alertData: GetAlertQuery;
}) {
  return (
    <nav
      css={{
        position: 'sticky',
        zIndex: 10,
        top: 0,
        backdropFilter: 'blur(48px) saturate(5)',
        backgroundColor: '#ffffffcc',
      }}
    >
      {alertData.alert.data.attributes.isVisible && (
        <Alert
          link={alertData.alert.data.attributes.link}
          message={alertData.alert.data.attributes.message}
        />
      )}
      <div
        css={css`
          border-bottom: #d9d9d9 1px solid;
          margin-bottom: 50px;
        `}
      >
        <div
          css={css`
            padding: 16px;
            max-width: 1280px;
            margin: auto;
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
          {getLinks({ navigationRes })}
          <Search />
        </div>
      </div>
    </nav>
  );
}
