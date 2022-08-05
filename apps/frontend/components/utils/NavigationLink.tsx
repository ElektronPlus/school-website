import { MaterialSymbol } from 'components/utils/symbols/MaterialSymbol';
import { NavigationItem } from 'generated/graphql';
import Link from 'next/link';
import { PartialDeep } from 'type-fest';

function Content({ icon, title }: { icon: string; title: string }) {
  return (
    <span
      css={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      {icon && <MaterialSymbol name={icon} />}
      <span>{title}</span>
    </span>
  );
}

/* strapi-plugin-navigation */
export function NavigationLink({
  navigationItem,
  isLink = true,
}: {
  navigationItem: PartialDeep<NavigationItem>;
  isLink?: boolean;
}) {
  const { title, path, icon } = navigationItem;

  if (isLink) {
    return (
      <Link href={path} passHref>
        <a>
          <Content icon={icon} title={title} />
        </a>
      </Link>
    );
  } else {
    <Content icon={icon} title={title} />;
  }
}
