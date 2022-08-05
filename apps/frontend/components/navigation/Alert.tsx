import { useTheme } from '@emotion/react';
import link from 'next/link';
import Link from 'next/link';
import { GlobalContext } from 'pages/_app';
import { useContext } from 'react';

function Content({ message, link }: { message: string; link: string | null }) {
  if (link) {
    return (
      <Link href={link} passHref>
        <a>{message} ➞</a>
      </Link>
    );
  }

  return <>{message}</>;
}

export function Alert() {
  const context = useContext(GlobalContext);
  const theme = useTheme();

  const alert = context.alert.alert.data.attributes;

  if (!alert.isVisible) {
    return null;
  }

  return (
    <div
      css={{
        padding: '8px',
        textAlign: 'center',
        borderTop: `${theme.color.border.primary.hexa()} 1px solid`,
        fontWeight: 700,
      }}
    >
      <Content message={alert.message} link={alert.link} />
    </div>
  );
}
