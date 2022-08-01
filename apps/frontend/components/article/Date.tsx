export function ArticleDate({ publishedAt }) {
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
