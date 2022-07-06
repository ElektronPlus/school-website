import { ArticleEntity } from '../../generated/graphql';
import StrapiImage from '../strapiImage';
import { css } from '@emotion/react';
import { getCategoryPathBySlug } from '../../services/utils';
import { ArticleAuthorCard } from 'components/article/author';
import { ArticleTitle } from 'components/article/title';
import { ArticleDetails } from 'components/article/details';
import { ArticleContent } from 'components/article/content';
import { Level } from 'react-accessible-headings';
import { getStrapiMedia } from 'services/media';

export const CARD_MAX_CHARACTERS = 500;

function Article({
  article,
  isSingleArticlePage,
}: {
  article: ArticleEntity;
  isSingleArticlePage: boolean;
}) {
  const publishedAt = article.attributes.publishedAt;

  const categoryPath = getCategoryPathBySlug(
    article.attributes.category?.data?.attributes?.slug
  );
  const categoryName = article.attributes.category?.data?.attributes?.name;

  const authorName = article.attributes.author?.data?.attributes?.name;
  const authorDescription =
    article.attributes.author?.data?.attributes?.description;
  const authorPictureUrl = getStrapiMedia(article.attributes.author?.data?.attributes?.picture);

  const { title, slug, content } = article.attributes;

  return (
    <li
      css={css`
        list-style-type: none;
      `}
      key={`article-${article.attributes.slug}`}
    >
      <article>
        <Level>
          <div
            css={css`
              margin: auto;
              padding: 16px;
            `}
          >
            <div
              css={css`
                background-color: white;
                border: 1px solid #e2e8f0;
                width: 100%;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                  0 4px 6px -2px rgba(0, 0, 0, 0.05);
                border-radius: 4px;
              `}
            >
              {article.attributes.image.data != null && (
                <div
                  css={css`
                    position: relative;
                    height: 340px;
                  `}
                >
                  <StrapiImage
                    image={article.attributes.image}
                    imageProps={{
                      layout: 'fill',
                      objectFit: 'cover',
                      style: { borderRadius: '4px' },
                    }}
                  />
                </div>
              )}
              <div
                css={css`
                  padding: 24px;
                `}
              >
                <div>
                  <ArticleDetails
                    publishedAt={publishedAt}
                    categoryName={categoryName}
                    categoryPath={categoryPath}
                  />
                  <ArticleTitle
                    title={title}
                    slug={slug}
                    isSingleArticlePage={isSingleArticlePage}
                  />

                  <ArticleContent
                    content={content}
                    slug={slug}
                    isSingleArticlePage={isSingleArticlePage}
                  />
                  {isSingleArticlePage && authorName && (
                    <ArticleAuthorCard
                      authorName={authorName}
                      authorDescription={authorDescription}
                      authorPictureUrl={authorPictureUrl}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </Level>
      </article>
    </li>
  );
}

export function BulletPoint() {
  return <span>&nbsp;&bull;&nbsp;</span>;
}

export default Article;
