import {
  Maybe,
  NavigationItem,
  UploadFileEntityResponse,
} from 'generated/graphql';
import { PartialDeep } from 'type-fest';
import { Header } from 'components/navigation/Header';
import Link from 'next/link';
import { Popover } from '@headlessui/react';
import { MdExpandMore } from 'react-icons/md';
import { ExpandButton } from './ExpandButton';

function DesktopMenuPopoverPanel({ items }: { items: NavigationItem[] }) {
  return (
    <div>
    <Popover.Panel
      css={{
        inset: "72px 0 auto 0px",
        position: 'absolute',
        margin: "auto",
        width: "75%",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        boxShadow: "0 10px 15px -3px rgb(0 0 0 / 15%), 0 4px 6px -2px rgb(0 0 0 / 10%)"
      }}
    >
      <ul css={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", maxWidth: "1280px", padding: "32px"}}>
        {items.map((item) => (
          <li key={item.uiRouterKey} css={{listStyleType: "none", color: "rgb(0 0 0 / 0.75)"}}>
            <Link href={item.uiRouterKey}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Popover.Panel>
    </div>
  );
}

function DesktopMenuLink({ item }: { item: NavigationItem }) {
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
              gap: '4px'
            }}
          >
            <span>{item.title}</span>
            <ExpandButton open={open}/>
          </Popover.Button>
          <DesktopMenuPopoverPanel items={item.items} />
          </>
        )}
        </Popover>
      </Link>
    </li>
  );
}

function DesktopMenuLinks({
  navigationRes,
}: {
  navigationRes: Array<Maybe<NavigationItem>>;
}) {
  return (
    <ul css={{ display: 'flex', listStyleType: 'none', gap: '24px', margin: "auto"}}>
      {navigationRes.map((item) => (
        <DesktopMenuLink item={item} key={item.uiRouterKey} />
      ))}
    </ul>
  );
}

export function DesktopMenu({
  header,
  navigationRes,
}: {
  navigationRes: Array<Maybe<NavigationItem>>;
  header: PartialDeep<UploadFileEntityResponse>;
}) {
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
      <Header header={header} />
      <DesktopMenuLinks navigationRes={navigationRes} />
    </div>
  );
}
