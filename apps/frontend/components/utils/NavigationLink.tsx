import { MaterialSymbol } from 'components/utils/materialSymbols';
import { NavigationItem } from 'generated/graphql';
import Link from 'next/link';
import { PartialDeep } from 'type-fest';

/* strapi-plugin-navigation */
export function NavigationLink({
  navigationItem,
  scale = 1,
}: {
  navigationItem: PartialDeep<NavigationItem>;
  scale?: number;
}) {
  const { title, path, icon } = navigationItem;

  return (
    <Link href={path} passHref>
      <a css={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: `${scale}rem` }}>
        {icon && <MaterialSymbol name={icon} />}
        <span>{title}</span>
      </a>
    </Link>
  );
}
