import { css } from '@emotion/react';
import { ArticleCategory } from './Category';
import { ArticleDate } from './Date';

export function ArticleDetails({
  publishedAt,
  categoryName = null,
  categoryPath = null,
  isSingleArticlePage = false,
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
          &nbsp;&bull;&nbsp;
          <ArticleCategory path={categoryPath} name={categoryName} />
        </>
      )}
    </span>
  );
}
