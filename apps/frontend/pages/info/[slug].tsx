import client from 'lib/apolloClient';
import DOMPurify from 'isomorphic-dompurify';
import { Seo } from 'features/seo/components/Seo';
import { EntryTitle } from 'components/entry/Title';
import { EntryContent } from 'components/entry/Content';
import { EntryDetails } from 'components/entry/Details';
import { FetchInfoDocument, FetchInfoQuery, FetchInfoSlugsQuery, FetchInfoSlugsDocument } from "generated/graphql";
import { GetStaticPaths, InferGetStaticPropsType } from 'next/types';

export default function InfoPage({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
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
  const data: FetchInfoSlugsQuery = (
    await client.query({
      query: FetchInfoSlugsDocument,
    })
  ).data;

  return {
    paths: data.pages.data.map((page) => ({
      params: { slug: page.attributes.slug },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const data: FetchInfoQuery = (
    await client.query({
      variables: {
        slug: params.slug,
      },
      query: FetchInfoDocument,
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
