import { Popover } from '@headlessui/react';
import { NavigationLink } from 'components/utils/NavigationLink';
import { AnimatedExpandButton } from 'components/utils/symbols/AnimatedExpandButton';
import { NavigationItem } from 'generated/graphql';
import { PartialDeep } from 'type-fest';

export function ParentLink({
  item,
  open,
}: {
  item: PartialDeep<NavigationItem>;
  open: boolean;
}) {
  return (
    <Popover.Button
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: '4px',
      }}
    >
      <NavigationLink navigationItem={item} isLink={false} />
      <AnimatedExpandButton open={open} />
    </Popover.Button>
  );
}
