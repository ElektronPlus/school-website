import Link from 'next/link';

export function SocialMediaIcon({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <Link passHref href={href}>
      <a>{children}</a>
    </Link>
  );
}
