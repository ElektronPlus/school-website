import { css, useTheme } from '@emotion/react';
import { ArticleReadMore } from 'components/article/ReadMore';
import DOMPurify from 'isomorphic-dompurify';
import { getArticlePathBySlug } from 'services/utils';

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
  const forbiddenAttrs = isSingleArticlePage ? [] : ['style'];
  const forbiddenTags = isSingleArticlePage ? [] : ['strong'];

  const theme = useTheme();

  return (
    <>
      <div
        css={{color: theme.color.text.secondary.hexa()}}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(article.content, {
            FORBID_ATTR: forbiddenAttrs,
            FORBID_TAGS: forbiddenTags,
          }),
        }}
      />
      {article.isTrimmed && (
        <ArticleReadMore text={readMore} path={getArticlePathBySlug(slug)} />
      )}
    </>
  );
}
