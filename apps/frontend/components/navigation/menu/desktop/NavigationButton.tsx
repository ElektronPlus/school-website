import { Popover } from '@headlessui/react';
import { NavigationLink } from 'components/utils/NavigationLink';
import { AnimatedExpandButton } from 'components/utils/symbols/AnimatedExpandButton';
import { NavigationItem } from 'generated/graphql';
import { forwardRef } from 'react';
import { PartialDeep } from 'type-fest';

export const NavigationButton = forwardRef(
  (
    {
      item,
      open,
      handleHoverState,
    }: {
      item: PartialDeep<NavigationItem>;
      open: boolean;
      handleHoverState: (
        element: 'popover' | 'link',
        isHovered: boolean
      ) => void;
    },
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <Popover.Button
        ref={ref}
        onMouseLeave={() => handleHoverState('link', false)}
        onMouseEnter={() => handleHoverState('link', true)}
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          gap: '4px',
          '&:focus': {
            outline: 'none',
            backgroundColor: "#0000000d",
            borderRadius: "8px"
          }
        }}
      >
        <NavigationLink navigationItem={item} isLink={false} />
        <AnimatedExpandButton open={open} />
      </Popover.Button>
    );
  }
);
