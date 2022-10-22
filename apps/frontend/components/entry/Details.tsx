import { css, useTheme } from '@emotion/react';
import { ArticleCategory } from '../article/Category';

function EntryDate({ publishedAt }) {
  const date = new Date(publishedAt);

  return (
    <time dateTime={publishedAt} suppressHydrationWarning>
      {`${date.toLocaleString(undefined, {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })}, ${date.getHours()}:${date.getMinutes()}`}
    </time>
  );
}


export function EntryDetails({
  publishedAt,
  categoryName = null,
  categoryPath = null,
}) {
  const theme = useTheme();
  return (
    <span
      css={{
        letterSpacing: '1.1px',
        fontSize: '0.85rem',
        textAlign: "center",
        margin: "auto",
        color: theme.color.text.light.hexa(),
        textTransform: 'uppercase',
      }}
    >
      <EntryDate publishedAt={publishedAt} />
      {categoryName !== null && categoryPath !== null && (
        <>
          &nbsp;&bull;&nbsp;
          <ArticleCategory path={categoryPath} name={categoryName} />
        </>
      )}
    </span>
  );
}
