import { Disclosure } from '@headlessui/react';
import { SeeMore } from 'components/navigation/menu/shared/SeeMore';
import { NavigationItem } from 'generated/graphql';
import { PartialDeep } from 'type-fest';
import { ChildLink } from './ChildLink';

export function DisclosurePanel({ item }: { item: PartialDeep<NavigationItem>; }) {
  return <Disclosure.Panel>
    <ul
      css={{
        display: 'grid',
        rowGap: '16px',
        padding: '8px 0',
        color: 'rgb(0 0 0 / 0.75)',
      }}
    >
      {item.items.map((child) => (
        <ChildLink
          key={child.uiRouterKey}
          item={child} />
      ))}
      <SeeMore path={item.path} isMobile />
    </ul>
  </Disclosure.Panel>;
}
