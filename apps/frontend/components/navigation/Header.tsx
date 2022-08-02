import { StrapiImageFuture } from 'components/StrapiImageFuture';
import Link from 'next/link';
import { GlobalContext } from 'pages/_app';
import { useContext } from 'react';
import { H } from 'react-accessible-headings';

export function Header() {
  const context = useContext(GlobalContext);

  const logo = context.global.global.data.attributes.logo;

  return (
    <header css={{ width: '100%' }}>
      <Link href="/" passHref>
        <a>
          <H
            css={{
              position: 'relative',
              width: '100%',
              height: '2rem',
              display: 'block',
            }}
          >
            <StrapiImageFuture
              image={logo}
              imageProps={{
                priority: true,
                sizes: '400px',
                style: { width: 'auto', height: '2rem' },
              }}
            />
          </H>
        </a>
      </Link>
    </header>
  );
}
