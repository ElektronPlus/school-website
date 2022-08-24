import { NextSeo } from 'next-seo';
import {
  GetPageBySlugDocument,
  GetPageBySlugQuery,
  GetPagesSlugsDocument,
  GetPagesSlugsQuery,
} from 'generated/graphql';
import client from 'lib/apolloClient';
import { GetStaticPaths, GetStaticProps } from 'next';
import Info from 'components/info/Index';

export default function InfoPage({
  pageData,
}: {
  pageData: GetPageBySlugQuery;
}) {
  console.log(pageData);
  const publishedAt = pageData.pages.data[0].attributes.publishedAt;
  const updatedAt = pageData.pages.data[0].attributes.updatedAt;
  const slug = pageData.pages.data[0].attributes.slug;
  //const { publishedAt, updatedAt, slug } = pageData.pages.data[0].attributes;

  return (
    <>
      {/* <NextSeo
        title={title}
        description={seo?.metaDescription}
        noindex={seo?.preventIndexing}
        openGraph={{
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
            tags: [category.data?.attributes.name],
          },
        }}
      /> */}
      <Info
        info={pageData.pages.data[0]}
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articleSlugsData: GetPagesSlugsQuery = (
    await client.query({
      query: GetPagesSlugsDocument,
    })
  ).data;

  return {
    paths: articleSlugsData.pages.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageData: GetPageBySlugQuery = (
    await client.query({
      variables: {
        slug: params.slug,
      },
      query: GetPageBySlugDocument,
    })
  ).data;

  return {
    props: { pageData },
    revalidate: 1,
  };
};
