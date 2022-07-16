import Link from 'next/link';
import { css } from '@emotion/react';

export function ArticleReadMore({
  text,
  path,
}: {
  text: string;
  path: string;
}) {
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
          css={css`
            color: #4299e1;
            font-weight: 500;
            &:hover {
              text-decoration: underline;
            }
          `}
        >
          {text}
        </a>
      </Link>
    </div>
  );
}
