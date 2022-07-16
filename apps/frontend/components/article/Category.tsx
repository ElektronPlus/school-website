import Link from 'next/link';

export function ArticleCategory({
  path,
  name,
}: {
  path: string;
  name: string;
}) {
  return (
    <Link passHref href={path}>
      <a>
        <span>{name}</span>
      </a>
    </Link>
  );
}
