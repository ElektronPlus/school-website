import React from 'react';
import { css } from '@emotion/react';
import { ArticleCategory } from './articleCategory';
import { ArticleDate } from './articleDate';
import { BulletPoint } from './article';


export function ArticleDetails({
  publishedAt, categoryName = null, categoryPath = null,
}) {
  return (
    <span
      css={css`
        letter-spacing: 1.1;
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
