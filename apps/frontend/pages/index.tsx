import ArticlesGrid from 'components/article/grid';
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
  articlesConfig,
  homepageData,
}: {
  articlesQuery: GetArticlesQuery;
  homepageData: GetHomepageQuery;
  articlesConfig: GetArticlesConfigQuery;
}) {
  const { articles } = articlesQuery;
  const { sectionHeader, readMore, cardMaxCharacters } =
    articlesConfig.articleConfig.data.attributes;

  return (
    <>
      <Seo seo={homepageData.homepage.data.attributes.seo} />
      <div>
        <div>
          <ArticlesGrid
            articles={articles}
            sectionHeader={sectionHeader}
            readMore={readMore}
            cardMaxCharacters={cardMaxCharacters}
          />
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

  const articlesQuery: GetArticlesQuery = (
    await client.query({
      query: GetArticlesDocument,
      variables: {
        articlesPerPage:
          articlesConfig.articleConfig.data.attributes.articlesPerPage,
      },
    })
  ).data;

  return {
    props: {
      homepageData,
      articlesQuery,
      articlesConfig,
    },
    revalidate: 1,
  };
}
