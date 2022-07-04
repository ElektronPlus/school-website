import { getArticlePathBySlug } from '../../services/utils';
import Link from 'next/link';
import { H } from 'react-headings';
import { css } from '@emotion/react';

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
