function AuthorName({ authorName }: { authorName: string }) {
  if (authorName !== null) {
    return (
      <>
        <span>📝 {authorName}</span>
      </>
    );
  }

  return null;
}

export function ArticleAuthorCard({ authorName }: { authorName: string }) {
  return <AuthorName authorName={authorName} />;
}
