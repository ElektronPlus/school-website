import Link from 'next/link';
import { css, useTheme } from '@emotion/react';

export function ArticleReadMore({
  text,
  path,
}: {
  text: string;
  path: string;
}) {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        justify-content: end;
        margin: 2px;
      `}
    >
      <Link href={path} passHref>
        <a
          css={{color: theme.color.text.light.hexa(), fontWeight: '700', '&:hover': {textDecoration: 'underline'}}}
        >
          {text}
        </a>
      </Link>
    </div>
  );
}
