import ellipsize from "ellipsize";
import { Entry } from "features/entries/components/Entry";
import {
  FetchEntriesSlugsDocument,
  FetchEntriesSlugsQuery,
} from "features/entries/queries/FetchEntriesSlugs.generated";
import { FetchEntryQuery, FetchEntryDocument } from "features/entries/queries/FetchEntry.generated";
import { Meta } from "features/seo/components/DefaultMeta";
import { MAXIMUM_META_DESCRIPTION_LENGTH } from "features/seo/constants";
import { htmlToText } from "html-to-text";
import { client } from "lib/apolloClient";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const { data } = await client.query<FetchEntryQuery>({
    query: FetchEntryDocument,
    variables: {
      slug: params.slug,
    },
  });

  const entry = data.entries?.data[0]?.attributes;

  if (!entry) {
    notFound();
  }

  return (
    <>
      <Meta
        title={entry.title}
        description={ellipsize(
          entry.SEO?.description ?? htmlToText(entry.content ?? ""),
          MAXIMUM_META_DESCRIPTION_LENGTH,
        )}
      />
      <Entry entry={entry} />
    </>
  );
}

export async function generateStaticParams() {
  const { data: slugs } = await client.query<FetchEntriesSlugsQuery>({
    query: FetchEntriesSlugsDocument,
  });

  return slugs.entries?.data.map(({ attributes: entry }) => ({
    ...entry,
  }));
}
