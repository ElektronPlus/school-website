import { NextSeo } from 'next-seo';
import Article from 'components/article/Index';
import {
  GetArticleBySlugDocument,
  GetArticleBySlugQuery,
  GetArticlesSlugsDocument,
  GetArticlesSlugsQuery,
} from 'generated/graphql';
import client from 'lib/apolloClient';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getStrapiMedia } from 'services/media';

export default function ArticlePage({
  articleData,
}: {
  articleData: GetArticleBySlugQuery;
}) {
  const { title, seo, publishedAt, updatedAt, category, image, slug } =
    articleData.articles.data[0].attributes;

  return (
    <>
      <NextSeo
        title={title}
        description={seo?.metaDescription}
        noindex={seo?.preventIndexing}
        openGraph={{
          type: 'article',
          description: seo?.metaDescription,
          title,
          images: [
            {
              url: getStrapiMedia(image),
              width: image.data?.attributes.width,
              height: image.data?.attributes.height,
              alt: image.data?.attributes.alternativeText,
            },
          ],
          article: {
            publishedTime: publishedAt,
            modifiedTime: updatedAt,
            authors: [
              articleData.articles.data[0].attributes.author?.data?.attributes
                .name,
            ],
            tags: [category.data?.attributes.name],
          },
        }}
      />
      <Article
        article={articleData.articles.data[0]}
        isSingleArticlePage={true}
        isPriority
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articleSlugsData: GetArticlesSlugsQuery = (
    await client.query({
      query: GetArticlesSlugsDocument,
    })
  ).data;

  return {
    paths: articleSlugsData.articles.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articleData: GetArticleBySlugQuery = (
    await client.query({
      variables: {
        slug: params.slug,
      },
      query: GetArticleBySlugDocument,
    })
  ).data;

  return {
    props: { articleData },
    revalidate: 1,
  };
};
