import { ArticleEntity } from 'generated/graphql';
import { StrapiImage } from '../StrapiImage';
import { css } from '@emotion/react';
import { getCategoryPathBySlug } from 'services/utils';
import { EntryAuthor } from 'components/entry/Author';
import { ArticleTitle } from 'components/article/Title';
import { EntryDetails } from 'components/entry/Details';
import { ArticleContent } from 'components/article/Content';
import { Level } from 'react-accessible-headings';
import { getStrapiMedia } from 'services/media';
import styled from '@emotion/styled';
import { PartialDeep } from 'type-fest';

function Article({
  article,
  isSingleArticlePage,
  readMore,
  cardMaxCharacters = 500,
  isPriority = false,
}: {
  article: PartialDeep<ArticleEntity>;
  isSingleArticlePage: boolean;
  readMore?: string;
  cardMaxCharacters?: number;
  isPriority?: boolean;
}) {
  const publishedAt = article.attributes.publishedAt;

  const categoryPath = getCategoryPathBySlug(
    article.attributes.category?.data?.attributes?.slug
  );
  const categoryName = article.attributes.category?.data?.attributes?.name;

  const authorName = article.attributes.author?.data?.attributes?.name;
  const authorDescription =
    article.attributes.author?.data?.attributes?.description;
  const authorPictureUrl = getStrapiMedia(
    article.attributes.author?.data?.attributes?.picture
  );

  const { title, slug, content } = article.attributes;

  const CenterIfSingleArticlePage = isSingleArticlePage
    ? styled.div(
        css`
          text-align: center;
          margin: auto;
          width: 75%;
        `
      )
    : styled.div();
  const CoverImageIfNotSingleArticlePage = isSingleArticlePage
    ? styled.div()
    : styled.div`
        position: relative;
        height: 340px;
      `;

  const ShadowAndBorderIfNotSingleArticlePage = isSingleArticlePage
    ? styled.div`
        width: 100%;
      `
    : styled.div`
        background-color: white;
        border: 1px solid #e2e8f0;
        width: 100%;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
      `;

  const NarrowWrapperIfSingleArticlePage = isSingleArticlePage
    ? styled.div(`max-width: 900px; margin: auto;`)
    : styled.div();

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
            <ShadowAndBorderIfNotSingleArticlePage>
              {article.attributes.image.data != null && (
                <CoverImageIfNotSingleArticlePage>
                  <StrapiImage
                    image={article.attributes.image}
                    imageProps={
                      isSingleArticlePage
                        ? {
                            objectFit: 'contain',
                            priority: true,
                            style: { borderRadius: '4px' },
                          }
                        : {
                            layout: 'fill',
                            objectFit: 'cover',
                            priority: isPriority,
                            sizes:
                              '(max-width: 768px) 90vw, 40vw, (max-width: 1680px) 33vw, 25vw, (max-width: 1920px) 20vw',
                            style: { borderRadius: '4px' },
                          }
                    }
                  />
                </CoverImageIfNotSingleArticlePage>
              )}
              <div
                css={css`
                  padding: 24px;
                `}
              >
                <NarrowWrapperIfSingleArticlePage>
                  <CenterIfSingleArticlePage>
                    <EntryDetails
                      publishedAt={publishedAt}
                      categoryName={categoryName}
                      categoryPath={categoryPath}
                    />
                    <ArticleTitle
                      title={title}
                      slug={slug}
                      isSingleArticlePage={isSingleArticlePage}
                    />
                  </CenterIfSingleArticlePage>

                  <ArticleContent
                    content={content}
                    slug={slug}
                    isSingleArticlePage={isSingleArticlePage}
                    readMore={readMore}
                    cardMaxCharacters={cardMaxCharacters}
                  />
                  {isSingleArticlePage && authorName && (
                    <EntryAuthor
                      authorName={authorName}
                      authorDescription={authorDescription}
                      authorPictureUrl={authorPictureUrl}
                    />
                  )}
                </NarrowWrapperIfSingleArticlePage>
              </div>
            </ShadowAndBorderIfNotSingleArticlePage>
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
