import client from 'lib/apolloClient';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import DOMPurify from 'isomorphic-dompurify';
import {
  Page,
  FetchPagesSlugsQuery,
  FetchPagesSlugsDocument,
  FetchPageDocument,
  FetchPageQuery,
} from 'generated/graphql';
import { Seo } from 'features/seo/components/Seo';
import { EntryTitle } from 'components/entry/Title';
import { EntryContent } from 'components/entry/Content';
import { EntryDetails } from 'components/entry/Details';

type InfoPageProps = {
  page: Page;
};

export default function InfoPage({ page }: InfoPageProps) {
  return (
    <>
      <Seo description={page.content} title={page.title} />
      <div css={{ maxWidth: '900px', margin: "auto" }}>
        <div css={{ textAlign: "center"}}>
          <EntryDetails publishedAt={page.publishedAt} />
          <EntryTitle title={page.title} />
        </div>
        <EntryContent>
          <div
            dangerouslySetInnerHTML={{
              __html: page.content,
            }}
          />
        </EntryContent>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: FetchPagesSlugsQuery = (
    await client.query({
      query: FetchPagesSlugsDocument,
    })
  ).data;

  return {
    paths: data.pages.data.map((page) => ({
      params: { slug: page.attributes.slug },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data: FetchPageQuery = (
    await client.query({
      variables: {
        slug: params.slug,
      },
      query: FetchPageDocument,
    })
  ).data;

  const page = data.pages.data.map((page) => ({
    ...page.attributes,
    content: DOMPurify.sanitize(page.attributes.content),
  }))[0];

  return {
    props: {
      page,
    },
    revalidate: 1,
  };
};
