import { css, useTheme } from '@emotion/react';
import { ArticleReadMore } from 'components/article/ReadMore';
import DOMPurify from 'isomorphic-dompurify';
import { getArticlePathBySlug } from 'services/utils';

export function InfoContent({
  content,
  slug,
}: {
  content: string;
  slug: string;
}) {

  const info = {
    content,
    isTrimmed: false,
  };

  // disable styling on the preview of the article
  const forbiddenAttrs = [];
  const forbiddenTags = [];

  const theme = useTheme();

  return (
    <>
      <div
        css={{color: theme.color.text.secondary.hexa()}}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(info.content, {
            FORBID_ATTR: forbiddenAttrs,
            FORBID_TAGS: forbiddenTags,
          }),
        }}
      />
    </>
  );
}
