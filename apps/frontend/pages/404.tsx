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
import { Button } from 'components/Button';
import { useTheme } from '@emotion/react';

export default function Custom404({
  errorData,
}: {
  errorData: GetErrorPageQuery;
}) {
  const { title, description, links } = errorData.page404.data.attributes;

  const theme = useTheme();

  return (
    <Level>
      <div css={{ justifyContent: "center", display: "grid", gap: "16px" }}>
        <div>
          <H css={{ fontSize: '4.75rem', fontWeight: 600 }}>
            {title}
          </H>
          <p css={{ fontSize: '1.25rem', color: theme.color.text.secondary.hexa() }}>{description}</p>
        </div>
        <div css={{display: "flex", justifyContent: "center"}}>
          <Button href="/">
            Wróć na stronę główną
          </Button>
          <Button href="#">
            Skontaktuj się z nami
          </Button>
        </div>
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
