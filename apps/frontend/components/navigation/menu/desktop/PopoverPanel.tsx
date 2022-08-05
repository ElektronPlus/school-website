import { Popover } from '@headlessui/react';
import { NavigationItem } from 'generated/graphql';
import { PartialDeep } from 'type-fest';
import { SeeMore } from 'components/navigation/menu/shared/SeeMore';
import { PopoverLinks } from 'components/navigation/menu/desktop/PopoverLinks';
import { useTheme } from '@emotion/react';

export function DesktopMenuPopoverPanel({
  items,
  parent,
}: {
  items: PartialDeep<NavigationItem[]>;
  parent: PartialDeep<NavigationItem>;
}) {
  const theme = useTheme();

  return (
    <div>
      <Popover.Panel
        css={{
          inset: '72px 0 auto 0px',
          position: 'absolute',
          margin: 'auto',
          width: '60%',
          color: theme.color.text.secondary.hexa(),
          borderRadius: '8px',
          border: `1px solid ${theme.color.border.withShadow.hexa()}`,
          backgroundColor: '#ffffff',
          boxShadow: `1px 1px 20px 8px ${theme.color.shadow.hexa()}`,
        }}
      >
        <PopoverLinks items={items} />
        <SeeMore path={parent.path} />
      </Popover.Panel>
    </div>
  );
}
