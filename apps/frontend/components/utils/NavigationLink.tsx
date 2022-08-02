import { MaterialSymbol } from 'components/utils/materialSymbols';
import { NavigationItem } from 'generated/graphql';
import Link from 'next/link';
import { PartialDeep } from 'type-fest';

/* strapi-plugin-navigation */
export function NavigationLink({
  navigationItem,
}: {
  navigationItem: PartialDeep<NavigationItem>;
}) {
  const { title, path, icon } = navigationItem;

  return (
    <Link href={path} passHref>
      <a css={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {icon && <MaterialSymbol name={icon} />}
        <span>{title}</span>
      </a>
    </Link>
  );
}
