import React from 'react';
import Articles from '../components/articles';
import Seo from '../components/seo';
import { GetIndexDocument, GetIndexQuery } from '../generated/graphql';
import client from '../lib/apolloClient';

export default function Home({ articles, homepage }) {
  return (
    <>
      <Seo seo={homepage.data.attributes.seo} />
      <div>
        <div>
          <Articles articles={articles.data} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { data }: { data: GetIndexQuery } = await client.query({
    query: GetIndexDocument,
  });

  return {
    props: data,
    revalidate: 1,
  };
}
