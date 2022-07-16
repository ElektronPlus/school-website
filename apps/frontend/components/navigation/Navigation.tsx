import { css } from '@emotion/react';
import { Alert } from 'components/navigation/Alert';
import { Header } from 'components/navigation/Header';
import { GetAlertQuery, UploadFileEntityResponse } from 'generated/graphql';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { PartialDeep } from 'type-fest';
import { MdMenu } from 'react-icons/md';
import { Popover } from '@headlessui/react';

const DynamicSearch = dynamic(() => import('components/Search'), {
  suspense: true,
});

function getLinks({ navigationRes }) {
  return (
    <ul
      css={css`
        padding: 16px 0;
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
            padding: 16px 0;
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
  header: PartialDeep<UploadFileEntityResponse>;
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
      <nav
        css={css`
          border-bottom: #d9d9d9 1px solid;
          margin-bottom: 50px;
        `}
      >
        <Popover css={{ position: 'relative' }}>
          <div
            css={css`
              padding: 16px;
              max-width: 1280px;
              margin: auto;
              display: grid;
              @media only screen and (min-width: 768px) {
                display: grid;
                grid-template-columns: 1fr 2fr;
                align-items: center;
                gap: 16px;
              }
            `}
          >
            <div css={{ display: 'flex' }}>
              <Header header={header} />
              <Popover.Button>
                <MdMenu aria-label='menu' css={{ fontSize: '2rem' }} />
              </Popover.Button>
            </div>
            <div
              css={css`
                @media only screen and (min-width: 768px) {
                  display: flex;
                }
              `}
            >
              <div>
                <Popover.Panel>{getLinks({ navigationRes })}</Popover.Panel>
              </div>
              {/* <Suspense>
                <DynamicSearch />
              </Suspense> */}
            </div>
          </div>
        </Popover>
        {alertData.alert.data.attributes.isVisible && (
          <Alert
            link={alertData.alert.data.attributes.link}
            message={alertData.alert.data.attributes.message}
          />
        )}
      </nav>
    </div>
  );
}
