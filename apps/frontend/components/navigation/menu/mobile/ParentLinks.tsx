import { Disclosure } from '@headlessui/react';
import { GlobalContext } from 'pages/_app';
import { useContext } from 'react';
import { DisclosurePanel } from './DisclosurePanel';
import { ParentLink } from './ParentLink';


export function ParentLinks() {
  const context = useContext(GlobalContext);

  const menuLinks = context.menuLinks.renderNavigation;

  return (
    <ul css={{ display: 'grid' }}>
      {menuLinks.map((item) => (
        <Disclosure
          as="li"
          key={item.uiRouterKey}
          css={{ listStyleType: 'none' }}
        >
          {({ open }) => (
            <>
              <ParentLink item={item} open={open}/>
              <DisclosurePanel item={item}/>
            </>
          )}
        </Disclosure>
      ))}
    </ul>
  );
}




