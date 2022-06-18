import Seo from '../../components/seo';
import Articles from '../../components/Articles/articles';

import { GetStaticPaths, GetStaticProps } from 'next';
import {
  GetCategoriesBySlugDocument,
  GetCategoriesBySlugQuery,
  GetCategoriesSlugsDocument,
  GetCategoriesSlugsQuery,
} from '../../generated/graphql';
import client from '../../lib/apolloClient';

const Category = ({ category }: { category: GetCategoriesBySlugQuery }) => {
  const { name, articles } = category.categories.data[0].attributes;

  const seo = {
    metaTitle: name,
    metaDescription: `Wszystkie artykuły z kategorii ${name}.`,
  };

  return (
    <>
      <Seo seo={seo} />
      <div>
        <div>
          <h2>{name}</h2>
          <Articles articles={articles} />
        </div>
      </div>
    </>
  );
};

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
  const matchingCategoriesData: GetCategoriesBySlugQuery = (
    await client.query({
      query: GetCategoriesBySlugDocument,
      variables: { slug: params.slug },
    })
  ).data;

  return {
    props: {
      category: matchingCategoriesData,
    },
    revalidate: 1,
  };
};

export default Category;
