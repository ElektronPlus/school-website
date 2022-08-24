import { GlobalContext } from 'pages/_app';
import { useContext } from 'react';
import { MenuLink } from 'components/navigation/menu/desktop/MenuLink';
import { Popover } from '@headlessui/react';

export function ButtonList() {
  const context = useContext(GlobalContext);

  const menuLinks = context.menuLinks.renderNavigation;

  return (
    <Popover.Group
      css={{
        display: 'flex',
        listStyleType: 'none',
        gap: '24px',
        margin: 'auto',
      }}
      as="ul"
    >
        {menuLinks.map((item) => (
          <MenuLink item={item} key={item.uiRouterKey} />
        ))}
    </Popover.Group>
  );
}
