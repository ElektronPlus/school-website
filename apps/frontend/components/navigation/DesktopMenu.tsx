import { Popover } from '@headlessui/react';
import { ExpandButton } from 'components/navigation/ExpandButton';
import { Header } from 'components/navigation/Header';
import { NavigationLink } from 'components/utils/NavigationLink';
import { NavigationItem } from 'generated/graphql';
import Link from 'next/link';
import { GlobalContext } from 'pages/_app';
import { useContext } from 'react';
import { MdArrowForward } from 'react-icons/md';
import { PartialDeep } from 'type-fest';

export function SeeMore({ path }: { path: string }) {
  const context = useContext(GlobalContext);

  const { navigationSeeMore } = context.translations.translation.data.attributes

  return (
    <li
      css={{
        listStyleType: 'none',
        margin: '32px',
        padding: '32px 32px 0 32px',
        display: 'flex',
        justifyContent: 'flex-end',
        borderTop: "1px solid rgb(0 0 0 / 10%)"
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
          {navigationSeeMore} <MdArrowForward css={{ fontSize: '1.25rem' }} />
        </a>
      </Link>
    </li>
  );
}

function DesktopMenuPopoverPanel({
  items,
  parent
}: {
  items: PartialDeep<NavigationItem[]>;
  parent: PartialDeep<NavigationItem>;
}) {
  return (
    <div>
      <Popover.Panel
        css={{
          inset: '72px 0 auto 0px',
          position: 'absolute',
          margin: 'auto',
          width: '60%',
          borderRadius: '8px',
          backgroundColor: '#ffffff',
          boxShadow:
            '0 10px 15px -3px rgb(0 0 0 / 15%), 0 4px 6px -2px rgb(0 0 0 / 10%)',
        }}
      >
        <ul
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '16px',
            maxWidth: '1280px',
            padding: '32px 32px 0 32px',
          }}
        >
          {items.map((item) => (
            <li
              key={item.uiRouterKey}
              css={{ listStyleType: 'none', color: 'rgb(0 0 0 / 0.75)' }}
            >
              <NavigationLink navigationItem={item} />
            </li>
          ))}
        </ul>
        <SeeMore path={parent.path} />
      </Popover.Panel>
    </div>
  );
}

function DesktopMenuLink({ item }: { item: PartialDeep<NavigationItem> }) {
  return (
    <li>
      <Link href={item.path} passHref>
        <Popover>
          {({ open }) => (
            <>
              <Popover.Button
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  gap: '4px',
                }}
              >
                <NavigationLink navigationItem={item}/>
                <ExpandButton open={open} />
              </Popover.Button>
              <DesktopMenuPopoverPanel items={item.items} parent={item} />
            </>
          )}
        </Popover>
      </Link>
    </li>
  );
}

function DesktopMenuLinks() {
  const context = useContext(GlobalContext);

  const menuLinks = context.menuLinks.renderNavigation;

  return (
    <ul
      css={{
        display: 'flex',
        listStyleType: 'none',
        gap: '24px',
        margin: 'auto',
      }}
    >
      {menuLinks.map((item) => (
        <DesktopMenuLink item={item} key={item.uiRouterKey} />
      ))}
    </ul>
  );
}

export function DesktopMenu() {
  return (
    <div
      css={{
        maxWidth: '1280px',
        margin: 'auto',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Header />
      <DesktopMenuLinks />
    </div>
  );
}
