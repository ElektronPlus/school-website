import { useTheme } from '@emotion/react';
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
  const theme = useTheme();

  const { navigationSeeMore } =
    context.translations.translation.data.attributes;

  const Wrapper = isMobile
    ? styled.div({
        padding: '16px 0 0 0',
        margin: '8px 0 0 0',
        borderTop: `${theme.color.border.primary.hexa()} 1px solid`,
      })
    : styled.div({
        margin: '32px',
        padding: '32px 32px 0 32px',
        display: 'flex',
        justifyContent: 'flex-end',
        borderTop: `${theme.color.border.primary.hexa()} 1px solid`,
      });

  return (
    <Wrapper>
      <Link href={path} passHref>
        <a
          css={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontWeight: '700',
          }}
        >
          {navigationSeeMore}
          <MaterialSymbol name="navigate_next" grade={200} opticalSize={0} />
        </a>
      </Link>
    </Wrapper>
  );
}
