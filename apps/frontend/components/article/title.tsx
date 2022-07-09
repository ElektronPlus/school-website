import { getArticlePathBySlug } from '../../services/utils';
import Link from 'next/link';
import { css } from '@emotion/react';
import { H } from 'react-accessible-headings';

export function ArticleTitle({ title, slug, isSingleArticlePage }) {
  if (isSingleArticlePage) {
    return (
      <H
        css={css`
          font-size: 2rem;
          padding-bottom: 48px;
          font-weight: 700;
        `}
      >
        {title}
      </H>
    );
  } else {
    return (
      <Link href={getArticlePathBySlug(slug)} passHref>
        <a>
          <H
            css={css`
              font-size: 1.5rem;
              font-weight: 500;
            `}
          >
            {title}
          </H>
        </a>
      </Link>
    );
  }
}
