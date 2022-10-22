import { NextSeo } from 'next-seo';
import ArticlesGrid from 'components/article/Grid';

import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import {
  GetTranslationsDocument,
  GetTranslationsQuery,
} from 'generated/graphql';
import client from 'lib/apolloClient';
import { FetchBlogPageQuery, FetchBlogPageDocument, FetchBlogEntriesOfCategoryQuery, FetchBlogEntriesOfCategoryDocument, FetchCategoriesSlugsQuery, FetchCategoriesSlugsDocument } from "../../generated/graphql";

function Category({
  categoryArticlesData,
  blogPageData,
  translationsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { name, articles, seo } =
    categoryArticlesData.categories.data[0].attributes;
  const { previewMaxCharacters } =
    blogPageData.blog.data.attributes.categorySection;
  const { articleReadMore } = translationsData.translation.data.attributes;

  return (
    <>
      <NextSeo
        title={name}
        description={seo?.metaDescription}
        noindex={seo?.preventIndexing}
      />
      <div>
        <div>
          <ArticlesGrid
            articles={articles}
            sectionHeader={name}
            cardMaxCharacters={previewMaxCharacters}
            readMore={articleReadMore}
          />
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categoriesSlugsData: FetchCategoriesSlugsQuery = (
    await client.query({ query: FetchCategoriesSlugsDocument })
  ).data;

  return {
    paths: categoriesSlugsData.categories.data.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const blogPageData: FetchBlogPageQuery = (
    await client.query({
      query: FetchBlogPageDocument,
    })
  ).data;

  const categoryArticlesData: FetchBlogEntriesOfCategoryQuery = (
    await client.query({
      query: FetchBlogEntriesOfCategoryDocument,
      variables: {
        slug: params.slug,
        entriesPerPage:
          blogPageData.blog.data.attributes.categorySection.entriesPerPage,
      },
    })
  ).data;

  const translationsData: GetTranslationsQuery = (
    await client.query({
      query: GetTranslationsDocument,
    })
  ).data;

  return {
    props: {
      blogPageData,
      categoryArticlesData,
      translationsData,
    },
    revalidate: 1,
  };
};

export default Category;
