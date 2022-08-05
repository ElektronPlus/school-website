import { css, useTheme } from '@emotion/react';
import { ArticleCategory } from './Category';
import { ArticleDate } from './Date';

export function ArticleDetails({
  publishedAt,
  categoryName = null,
  categoryPath = null,
  isSingleArticlePage = false,
}) {
  const theme = useTheme();
  return (
    <span
      css={{
        letterSpacing: '1.1px',
        fontSize: '0.85rem',
        color: theme.color.text.light.hexa(),
        textTransform: 'uppercase',
      }}
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
