import ArticlesGrid from 'components/article/Grid';
import {
  GetHomePageQuery,
  GetArticlesDocument,
  GetArticlesQuery,
  GetHomePageDocument,
  GetTranslationsQuery,
  GetTranslationsDocument,
} from 'generated/graphql';
import client from 'lib/apolloClient';
import { NextSeo } from 'next-seo';

export default function Home({
  articlesData,
  homePageData,
  translationsData,
}: {
  articlesData: GetArticlesQuery;
  homePageData: GetHomePageQuery;
  translationsData: GetTranslationsQuery;
}) {
  const { articles } = articlesData;
  const { header, previewMaxCharacters } =
    homePageData.homepage.data.attributes.articlesSection;
  const { articleReadMore, paginationNextPage } =
    translationsData.translation.data.attributes;

  return (
    <>
      <NextSeo
        description={
          homePageData.homepage.data?.attributes?.seo?.metaDescription
        }
        noindex={homePageData.homepage.data?.attributes?.seo?.preventIndexing}
      />
      <div>
        <div>
          <ArticlesGrid
            articles={articles}
            sectionHeader={header}
            readMore={articleReadMore}
            cardMaxCharacters={previewMaxCharacters}
          />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const homePageData: GetHomePageQuery = (
    await client.query({
      query: GetHomePageDocument,
    })
  ).data;

  const articlesData: GetArticlesQuery = (
    await client.query({
      query: GetArticlesDocument,
      variables: {
        articlesPerPage:
          homePageData.homepage.data.attributes.articlesSection.entriesPerPage,
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
      homePageData,
      articlesData,
      translationsData,
    },
    revalidate: 1,
  };
}
