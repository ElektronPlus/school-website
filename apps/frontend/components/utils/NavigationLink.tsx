import { MaterialSymbol } from 'components/utils/symbols/MaterialSymbol';
import { NavigationItem } from 'generated/graphql';
import Link from 'next/link';
import { PartialDeep } from 'type-fest';

function Content({ icon, title }: { icon: string; title: string }) {
  return (
    // https://stackoverflow.com/questions/11078509/how-to-increase-the-clickable-area-of-a-a-tag-button
    <span
      css={{
        display: 'inline-block',
        position: 'relative',
        padding: '32px 0',
        margin: '-32px 0',
        cursor: 'pointer'
      }}
    >
      <span
        css={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
        }}
      >
        {icon && <MaterialSymbol name={icon} />}
        <span>{title}</span>
      </span>
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
    return <Content icon={icon} title={title} />;
  }
}
