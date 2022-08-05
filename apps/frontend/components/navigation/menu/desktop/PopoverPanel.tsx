import { Popover } from '@headlessui/react';
import { NavigationItem } from 'generated/graphql';
import { PartialDeep } from 'type-fest';
import { SeeMore } from 'components/navigation/menu/SeeMore';
import { PopoverLinks } from 'components/navigation/menu/desktop/PopoverLinks';

export function DesktopMenuPopoverPanel({
  items,
  parent,
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
        <PopoverLinks items={items} />
        <SeeMore path={parent.path} />
      </Popover.Panel>
    </div>
  );
}
