import { UploadFileEntityResponse } from 'generated/graphql';
import { StrapiImageFuture } from 'components/StrapiImageFuture';
import { H, Level } from 'react-accessible-headings';
import { PartialDeep } from 'type-fest';
import Link from 'next/link';

export function Header({
  header,
}: {
  header: PartialDeep<UploadFileEntityResponse>;
}) {
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
                image={header}
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
