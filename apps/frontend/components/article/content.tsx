import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import { css } from '@emotion/react';
import { getArticlePathBySlug } from '../../services/utils';
import { ArticleReadMore } from './readMore';

export function ArticleContent({
  content, slug, isSingleArticlePage, readMore, cardMaxCharacters,
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
          text={readMore}
          path={getArticlePathBySlug(slug)} />
      )}
    </>
  );
}
