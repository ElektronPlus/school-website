import { Disclosure, Popover } from '@headlessui/react';
import { MdArrowForward, MdExpandMore, MdMenu } from 'react-icons/md';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import { H, Level } from 'react-accessible-headings';
import { Header } from './Header';
import { ExpandButton } from './ExpandButton';
import { GlobalContext } from 'pages/_app';
import { useContext } from 'react';

export function MobileMenuLinks() {
  const context = useContext(GlobalContext);

  const menuLinks = context.menuLinks.renderNavigation;

  return (
    <ul css={{ display: 'grid' }}>
      {menuLinks.map((item) => (
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

export function MobileMenu() {
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
            <Header />
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
                  <MobileMenuLinks />
                </Popover.Panel>
              </div>
            </Level>
          </div>
        </div>
      )}
    </Popover>
  );
}
