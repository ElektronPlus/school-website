import { VisuallyHidden } from '@chakra-ui/react';
import Link from 'next/link';

export function SocialMediaIcons({
  children, label, href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <Link passHref href={href}>
      <a>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </a>
    </Link>
  );
}
