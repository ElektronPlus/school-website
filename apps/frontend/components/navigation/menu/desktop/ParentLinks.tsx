import { GlobalContext } from 'pages/_app';
import { useContext } from 'react';
import { MenuLink } from 'components/navigation/menu/desktop/MenuLink';

export function ParentLinks() {
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
        <MenuLink item={item} key={item.uiRouterKey} />
      ))}
    </ul>
  );
}
