import React from 'react';
import { css, ClassNames } from '@emotion/react';
import { ArticleCategory } from './category';
import { ArticleDate } from './date';
import { BulletPoint } from '.';


export function ArticleDetails({
  publishedAt, categoryName = null, categoryPath = null, isSingleArticlePage = false,
}) {
  return (
    <span
      css={css`
        letter-spacing: 1.1px;
        font-size: 0.85rem;
        color: #4299e1;
        text-transform: uppercase;
      `}
    >
      <ArticleDate publishedAt={publishedAt} />
      {categoryName !== null && categoryPath !== null && (
        <>
          <BulletPoint />
          <ArticleCategory path={categoryPath} name={categoryName} />
        </>
      )}
    </span>
  );
}
