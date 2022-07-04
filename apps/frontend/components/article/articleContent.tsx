import React from 'react';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import { css } from '@emotion/react';
import { getArticlePathBySlug } from '../../services/utils';
import { ArticleReadMore } from './articleReadMore';
import { CARD_MAX_CHARACTERS } from './article';

export function ArticleContent({
  content, slug, isSingleArticlePage,
}: {
  content: string;
  slug: string;
  isSingleArticlePage: boolean;
}) {
  function getTrimmedContent(content: string) {
    return content.substring(0, CARD_MAX_CHARACTERS) + '...';
  }

  const article = {
    content,
    isTrimmed: false,
  };

  if (!isSingleArticlePage) {
    if (article.content.length > CARD_MAX_CHARACTERS) {
      article.content = getTrimmedContent(article.content);
      article.isTrimmed = true;
    }
  }
  return (
    <>
      <ReactMarkdown
        css={css`
          color: #718096;
        `}
        children={article.content}
        rehypePlugins={[rehypeRaw]} />
      {article.isTrimmed && (
        <ArticleReadMore
          text="Czytaj więcej"
          path={getArticlePathBySlug(slug)} />
      )}
    </>
  );
}
