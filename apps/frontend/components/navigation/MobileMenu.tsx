import { Popover } from '@headlessui/react';
import { css } from '@emotion/react';
import { UploadFileEntityResponse } from 'generated/graphql';
import { MdMenu } from 'react-icons/md';
import { PartialDeep } from 'type-fest';
import { Header } from './Header';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Disclosure } from '@headlessui/react';
import { MdExpandMore, MdClose } from 'react-icons/md';
import { H, Level } from 'react-accessible-headings';
import { transform } from '@chakra-ui/react';

// const DynamicSearch = dynamic(() => import('components/Search'), {
//   suspense: true,
// });

function ChildItem({ child }) {
  return (
    <li css={{ listStyleType: 'none' }}>
      <Link href={child.path} passHref>
        <a>{child.title}</a>
      </Link>
    </li>
  );
}

function getLinks({ navigationRes }) {
  return (
    <ul css={{ display: 'grid' }}>
      {navigationRes.map((item) => (
        <Disclosure
          as="li"
          key={item.uiRouterKey}
          css={{ listStyleType: 'none' }}
        >
          {({ open }) => (
            <>
              <Disclosure.Button
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  fontWeight: 500,
                  padding: '8px 0',
                  fontSize: '1.15rem',
                }}
              >
                <H>{item.title}</H>
                <MdExpandMore
                  css={{
                    fontSize: '1.5rem',
                    transform: `rotate(${open ? 180 : 0}deg)`,
                  }}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                <ul css={{ display: 'grid', rowGap: '16px', padding: '8px 0' }}>
                  {item.items.map((child) => (
                    <ChildItem key={child.uiRouterKey} child={child}/>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </ul>
  );
}

export default function MobileMenu({
  header,
  navigationRes,
}: {
  navigationRes: object;
  header: PartialDeep<UploadFileEntityResponse>;
}) {
  return (
    <Popover>
      <div
        css={{
          display: 'grid',
          margin: 'auto',
          padding: '16px',
        }}
      >
        <div css={{ display: 'flex' }}>
          <Header header={header} />
          <Popover.Button>
            <MdMenu aria-label="menu" css={{ fontSize: '2rem' }} />
          </Popover.Button>
        </div>
        <div>
          <Level>
            <div>
              <Popover.Panel css={{padding: "16px 0 0 0"}}>{getLinks({ navigationRes })}</Popover.Panel>
            </div>
          </Level>
          {/* <Suspense>
            <DynamicSearch />
          </Suspense> */}
        </div>
      </div>
    </Popover>
  );
}
