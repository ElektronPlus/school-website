import { Popover } from '@headlessui/react';
import { NavigationItem } from 'generated/graphql';
import Link from 'next/link';
import { PartialDeep } from 'type-fest';
import { ParentLink } from 'components/navigation/menu/desktop/ParentLink';
import { DesktopMenuPopoverPanel } from 'components/navigation/menu/desktop/PopoverPanel';

export function MenuLink({ item }: { item: PartialDeep<NavigationItem> }) {
  return (
    <li>
      <Link href={item.path} passHref>
        <Popover>
          {({ open }) => (
            <>
              <ParentLink open={open} item={item} />
              <DesktopMenuPopoverPanel items={item.items} parent={item} />
            </>
          )}
        </Popover>
      </Link>
    </li>
  );
}
