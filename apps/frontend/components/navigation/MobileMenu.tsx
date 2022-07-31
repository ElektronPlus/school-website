import { Disclosure, Popover } from '@headlessui/react';
import {
  NavigationItem,
  UploadFileEntityResponse,
  Maybe,
} from 'generated/graphql';
import { MdArrowForward, MdExpandMore, MdMenu } from 'react-icons/md';
import { PartialDeep } from 'type-fest';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import { H, Level } from 'react-accessible-headings';
import Search from 'components/Search';
import { Header } from './Header';
import { ExpandButton } from './ExpandButton';

export function MobileMenuLinks({
  navigationRes,
}: {
  navigationRes: Array<Maybe<NavigationItem>>;
}) {
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
                <ExpandButton open={open} scale={1.5}/>
              </Disclosure.Button>
              <Disclosure.Panel>
                <ul
                  css={{
                    display: 'grid',
                    rowGap: '16px',
                    padding: '8px 0',
                    color: 'rgb(0 0 0 / 0.75)',
                  }}
                >
                  {item.items.map((child) => (
                    <ChildItem
                      key={child.uiRouterKey}
                      title={child.title}
                      path={child.path} />
                  ))}
                  <SeeMore path={item.path} text="Zobacz więcej" />
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </ul>
  );
}


export function ChildItem({ title, path }: { title: string; path: string }) {
  return (
    <li css={{ listStyleType: 'none' }}>
      <Link href={path} passHref>
        <a>{title}</a>
      </Link>
    </li>
  );
}

export function SeeMore({ text, path }: { text: string; path: string }) {
  return (
    <li
      css={{
        listStyleType: 'none',
        padding: '16px 0 0 0',
        margin: '8px 0 0 0',
        borderTop: '1px solid rgb(0 0 0 / 10%)',
      }}
    >
      <Link href={path} passHref>
        <a
          css={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontWeight: '500',
          }}
        >
          {text} <MdArrowForward css={{ fontSize: '1.25rem' }} />
        </a>
      </Link>
    </li>
  );
}

export function MobileMenu({
  header,
  navigationRes,
}: {
  navigationRes: Array<Maybe<NavigationItem>>;
  header: PartialDeep<UploadFileEntityResponse>;
}) {
  return (
    <Popover>
      {({ open }) => (
        <div
          css={{
            display: 'grid',
            margin: 'auto',
            padding: '16px',
          }}
        >
          <div css={{ display: 'flex', justifyContent: "space-between" }}>
            <Header header={header} />
            <Popover.Button>
              {open ? (
                <MdClose aria-label="menu" css={{ fontSize: '2rem' }} />
              ) : (
                <MdMenu aria-label="menu" css={{ fontSize: '2rem' }} />
              )}
            </Popover.Button>
          </div>
          <div>
            <Level>
              <div>
                <Popover.Panel
                  css={{
                    padding: '16px 0 0 0',
                    overflowY: 'scroll',
                    height: '70vh',
                  }}
                >
                  {/* <div css={{ padding: '8px 0' }}>
                    <Search />
                  </div> */}
                  {MobileMenuLinks({ navigationRes })}
                </Popover.Panel>
              </div>
            </Level>
          </div>
        </div>
      )}
    </Popover>
  );
}
