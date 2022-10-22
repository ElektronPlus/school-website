import { NextSeo } from 'next-seo';
import Article from 'components/article/Index';
import {
  FetchBlogEntriesSlugsDocument,
} from 'generated/graphql';
import client from 'lib/apolloClient';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { getStrapiMedia } from 'services/media';
import { FetchBlogBySlugDocument, FetchBlogBySlugQuery } from "generated/graphql";
import { FetchBlogEntriesSlugsQuery } from "../../generated/graphql";

export default function ArticlePage({
  articleData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
  const articleSlugsData: FetchBlogEntriesSlugsQuery = (
    await client.query({
      query: FetchBlogEntriesSlugsDocument,
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

export const getStaticProps = async ({ params }) => {
  const articleData: FetchBlogBySlugQuery = (
    await client.query({
      variables: {
        slug: params.slug,
      },
      query: FetchBlogBySlugDocument,
    })
  ).data;

  return {
    props: { articleData },
    revalidate: 1,
  };
};
