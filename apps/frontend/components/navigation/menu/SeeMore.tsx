import styled from '@emotion/styled';
import { MaterialSymbol } from 'components/utils/symbols/MaterialSymbol';
import Link from 'next/link';
import { GlobalContext } from 'pages/_app';
import { useContext } from 'react';

export function SeeMore({
  path,
  isMobile = false,
}: {
  path: string;
  isMobile?: boolean;
}) {
  const context = useContext(GlobalContext);

  const { navigationSeeMore } =
    context.translations.translation.data.attributes;

  const Wrapper = isMobile
    ? styled.div({
        padding: '16px 0 0 0',
        margin: '8px 0 0 0',
        borderTop: '1px solid rgb(0 0 0 / 10%)',
      })
    : styled.div({
        margin: '32px',
        padding: '32px 32px 0 32px',
        display: 'flex',
        justifyContent: 'flex-end',
        borderTop: '1px solid rgb(0 0 0 / 10%)',
      });

  return (
    <Wrapper>
      <Link href={path} passHref>
        <a
          css={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontWeight: '500',
          }}
        >
          {navigationSeeMore}
          <MaterialSymbol name="navigate_next" />
        </a>
      </Link>
    </Wrapper>
  );
}
