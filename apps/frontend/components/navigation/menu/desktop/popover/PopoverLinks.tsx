import { NavigationLink } from 'components/utils/NavigationLink';
import { NavigationItem } from 'generated/graphql';
import { PartialDeep } from 'type-fest';

export function PopoverLinks({ items }: { items: PartialDeep<NavigationItem[]> }) {
  return (
    <ul
      css={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '16px',
        maxWidth: '1280px',
        padding: '32px 32px 0 32px',
      }}
    >
      {items.map((item) => (
        <li
          key={item.uiRouterKey}
          css={{ listStyleType: 'none'}}
          onMouseOver={() => {}}
        >
          <NavigationLink navigationItem={item} />
        </li>
      ))}
    </ul>
  );
}
