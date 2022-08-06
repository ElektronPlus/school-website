import { Popover } from '@headlessui/react';
import { NavigationItem } from 'generated/graphql';
import Link from 'next/link';
import { PartialDeep } from 'type-fest';
import { NavigationButton } from 'components/navigation/menu/desktop/NavigationButton';
import { DesktopMenuPopoverPanel } from 'components/navigation/menu/desktop/popover/PopoverPanel';
import { useEffect, useRef, useState } from 'react';

export function MenuLink({ item }: { item: PartialDeep<NavigationItem> }) {
  const [hovered, setHovered] = useState({
    popover: false,
    link: false,
  });
  const [open, setOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  function handleHoverState(element: 'popover' | 'link', isHovered: boolean) {
    setHovered({
      ...hovered,
      [element]: isHovered,
    });
  }

  function toggleMenu() {
    const shouldBeOpenned = hovered.popover || hovered.link;

    if ((shouldBeOpenned && !open) || (!shouldBeOpenned && open)) {
      setOpen(!open);
      buttonRef?.current?.click();
    }
  }

  useEffect(() => {
    toggleMenu();
  });

  return (
    <li>
      <Link href={item.path} passHref>
        <Popover>
          {({ open }) => (
            <>
              <NavigationButton
                ref={buttonRef}
                open={open}
                item={item}
                handleHoverState={handleHoverState}
              />
              {open && (
                <DesktopMenuPopoverPanel
                  items={item.items}
                  parent={item}
                  handleHoverState={handleHoverState}
                />
              )}
            </>
          )}
        </Popover>
      </Link>
    </li>
  );
}
