import React from 'react';
import Articles from '../components/Articles/articles';
import Seo from '../components/seo';
import {
  GetHomepageQuery,
  GetArticlesDocument,
  GetArticlesQuery,
  GetHomepageDocument,
  GetArticlesConfigDocument,
  GetArticlesConfigQuery,
} from '../generated/graphql';
import client from '../lib/apolloClient';

export default function Home({
  articlesQuery,
  homepageData,
}: {
  articlesQuery: GetArticlesQuery;
  homepageData: GetHomepageQuery;
}) {
  const { articles } = articlesQuery;

  return (
    <>
      <Seo seo={homepageData.homepage.data.attributes.seo} />
      <div>
        <div>
          <Articles articles={articles} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const homepageData: GetHomepageQuery = (
    await client.query({
      query: GetHomepageDocument,
    })
  ).data;

  const articlesConfig: GetArticlesConfigQuery = (
    await client.query({
      query: GetArticlesConfigDocument,
    })
  ).data;

  const articlesPerPage =
    articlesConfig.articleConfig.data.attributes.articlesPerPage;

  const articlesQuery: GetArticlesQuery = (
    await client.query({
      query: GetArticlesDocument,
      variables: { articlesPerPage },
    })
  ).data;

  return {
    props: {
      homepageData,
      articlesQuery,
    },
    revalidate: 1,
    fallback: 'true',
  };
}
