import DOMPurify from 'isomorphic-dompurify';
import {
  GetArticleBySlugQuery,
  GetArticleBySlugDocument,
  GetErrorPageQuery,
  GetErrorPageDocument,
} from 'generated/graphql';
import client from 'lib/apolloClient';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Level, H } from 'react-accessible-headings';
import styles from './404.module.css';

export default function Custom404({
  errorData,
}: {
  errorData: GetErrorPageQuery;
}) {
  const { title, description, links } = errorData.page404.data.attributes;
  return (
    <Level>
      <div css={{textAlign: "center" }}>
        <H css={{fontSize: "4.688rem", borderBottom: "20px" }}>
          <b>{title}</b>
        </H>

        <p css={{ fontSize: "1.25rem" }}>{description}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(links),
          }}
        />
      </div>
    </Level>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const errorData: GetErrorPageQuery = (
    await client.query({
      query: GetErrorPageDocument,
    })
  ).data;

  return {
    props: { errorData },
    revalidate: 1,
  };
};
