import {
  FetchErrorPageQuery,
  FetchErrorPageDocument,
} from 'generated/graphql';
import client from 'lib/apolloClient';
import { InferGetStaticPropsType } from 'next';
import { Level, H } from 'react-accessible-headings';
import { Button } from 'components/Button';
import { useTheme } from '@emotion/react';

export default function Custom404({
  errorData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, description } = errorData.page404.data.attributes;

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

export const getStaticProps = async () => {
  const errorData: FetchErrorPageQuery = (
    await client.query({
      query: FetchErrorPageDocument,
    })
  ).data;

  return {
    props: { errorData },
    revalidate: 1,
  };
};
