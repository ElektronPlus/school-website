import { ArticleEntity } from '../../generated/graphql';
import StrapiImage from '../strapiImage';
import {
  Center,
  useColorModeValue,
  Stack,
  Box,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import {
  getCategoryPathBySlug,
} from '../../services/utils';
import { ArticleAuthorCard } from 'components/article/author';
import { ArticleTitle } from 'components/article/title';
import { ArticleDetails } from 'components/article/details';
import { ArticleContent } from 'components/article/content';

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

  const { title, slug, content } = article.attributes;

  return (
    <li
      css={css`
        list-style-type: none;
      `}
      key={`article-${article.attributes.slug}`}
    >
      <article>
        <Center p={4}>
          <Box
            border="1px"
            borderColor="gray.200"
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'lg'}
            rounded={'md'}
          >
            {article.attributes.image.data != null && (
              <Box bg={'gray.100'} position="relative" height="340px">
                <StrapiImage
                  image={article.attributes.image}
                  imageProps={{
                    layout: 'fill',
                    objectFit: 'cover',
                    style: { borderRadius: '4px' },
                  }}
                />
              </Box>
            )}
            <Stack p={6}>
              <ArticleDetails
                publishedAt={publishedAt}
                categoryName={categoryName}
                categoryPath={categoryPath}
              />
              <ArticleTitle title={title} slug={slug} />
              <ArticleContent
                content={content}
                slug={slug}
                isSingleArticlePage={isSingleArticlePage}
              />
              {isSingleArticlePage &&
                <ArticleAuthorCard authorName={authorName} />
              }
            </Stack>
          </Box>
        </Center>
      </article>
    </li>
  );
}

export function BulletPoint() {
  return <span>&nbsp;&bull;&nbsp;</span>;
}

export default Article;
