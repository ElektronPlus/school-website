import { css } from '@emotion/react';
import DOMPurify from 'isomorphic-dompurify';
import { getArticlePathBySlug } from 'services/utils';
import { ArticleReadMore } from 'components/article/ReadMore';

export function ArticleContent({
  content,
  slug,
  isSingleArticlePage,
  readMore,
  cardMaxCharacters,
}: {
  content: string;
  slug: string;
  readMore: string;
  isSingleArticlePage: boolean;
  cardMaxCharacters: number;
}) {
  function getTrimmedContent(content: string) {
    return content.substring(0, cardMaxCharacters) + '...';
  }

  const article = {
    content,
    isTrimmed: false,
  };

  if (!isSingleArticlePage) {
    if (article.content.length > cardMaxCharacters) {
      article.content = getTrimmedContent(article.content);
      article.isTrimmed = true;
    }
  }

  // disable styling on the preview of the article
  const forbiddenTags = isSingleArticlePage ? [] : ['style'];

  return (
    <>
      <div
        css={css`
          color: #718096;
        `}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(article.content, {
            FORBID_ATTR: forbiddenTags,
          }),
        }}
      />
      {article.isTrimmed && (
        <ArticleReadMore text={readMore} path={getArticlePathBySlug(slug)} />
      )}
    </>
  );
}
