import ArticlesGrid from 'components/article/Grid';
import {
  FetchBlogEntriesDocument,
  FetchBlogEntriesQuery,
  GetTranslationsDocument,
  GetTranslationsQuery,
} from 'generated/graphql';
import client from 'lib/apolloClient';
import { NextSeo } from 'next-seo';
import { InferGetStaticPropsType } from 'next/types';
import { FetchHomepageQuery, FetchHomepageDocument } from "generated/graphql";

export default function Home({
  articlesData,
  homePageData,
  translationsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
  const homePageData: FetchHomepageQuery = (
    await client.query({
      query: FetchHomepageDocument,
    })
  ).data;

  const articlesData: FetchBlogEntriesQuery = (
    await client.query({
      query: FetchBlogEntriesDocument,
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
