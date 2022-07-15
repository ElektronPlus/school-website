import Seo from 'components/seo';
import ArticlesGrid from 'components/article/grid';

import { GetStaticPaths, GetStaticProps } from 'next';
import {
  GetCategoriesSlugsDocument,
  GetCategoriesSlugsQuery,
  GetBlogPageDocument,
  GetBlogPageQuery,
  GetCategoryPageQuery,
  GetCategoryPageDocument,
  GetTranslationsDocument,
  GetTranslationsQuery,
} from 'generated/graphql';
import client from 'lib/apolloClient';

function Category({ categoryArticlesData, blogPageData, translationsData}: { categoryArticlesData: GetCategoryPageQuery; blogPageData: GetBlogPageQuery; translationsData: GetTranslationsQuery }) {
  const { name, articles } = categoryArticlesData.categories.data[0].attributes;
  const { previewMaxCharacters } = blogPageData.blog.data.attributes.categorySection;
  const { articleReadMore } = translationsData.translation.data.attributes;


  return (
    <>
      {/* <Seo seo={seo} /> */}
      <div>
        <div>
          <ArticlesGrid articles={articles} sectionHeader={name} cardMaxCharacters={previewMaxCharacters} readMore={articleReadMore} />
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categoriesSlugsData: GetCategoriesSlugsQuery = (
    await client.query({ query: GetCategoriesSlugsDocument })
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogPageData: GetBlogPageQuery = (
    await client.query({
      query: GetBlogPageDocument
    })
  ).data

  const categoryArticlesData: GetCategoryPageQuery = (
    await client.query({
      query: GetCategoryPageDocument,
      variables: { slug: params.slug, entriesPerPage: blogPageData.blog.data.attributes.categorySection.entriesPerPage },
    })
  ).data;

  const translationsData: GetTranslationsQuery = (
    await client.query({
      query: GetTranslationsDocument
    })
  ).data


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
