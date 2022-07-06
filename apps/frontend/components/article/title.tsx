import { getArticlePathBySlug } from '../../services/utils';
import Link from 'next/link';
import { css } from '@emotion/react';
import { H } from 'react-accessible-headings';

export function ArticleTitle({ title, slug }) {
  return (
    <Link href={getArticlePathBySlug(slug)} passHref>
      <a>
        <H
          css={css`
            font-size: 1.5rem;
          `}
        >
          {title}
        </H>
      </a>
    </Link>
  );
}
