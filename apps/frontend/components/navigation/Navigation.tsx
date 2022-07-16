import { css } from '@emotion/react';
import { Alert } from 'components/navigation/Alert';
import { Header } from 'components/navigation/Header';
import { GetAlertQuery, UploadFileEntityResponse } from 'generated/graphql';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const DynamicSearch = dynamic(() => import('components/Search'), {
  suspense: true,
});

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
            padding: 12px;
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
  header,
  navigationRes,
  alertData,
}: {
  navigationRes: object;
  header: UploadFileEntityResponse;
  alertData: GetAlertQuery;
}) {
  return (
    <div
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
      <nav
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
            display: grid;
            gap: 32px;
            @media only screen and (min-width: 768px) {
              display: grid;
              grid-template-columns: 1fr 2fr;
              align-items: center;
              gap: 16px;
            }
          `}
        >
          <div></div>
          <header
            css={css`
              width: 100%;
            `}
          >
            <Link href="/" passHref>
              <a>
                <Header
                  header={header}
                />
              </a>
            </Link>
          </header>
          <div
            css={css`
              @media only screen and (min-width: 768px) {
                display: flex;
              }
            `}
          >
            {getLinks({ navigationRes })}
            <Suspense>
              <DynamicSearch />
            </Suspense>
          </div>
        </div>
      </nav>
    </div>
  );
}
