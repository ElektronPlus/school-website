import { Entry } from "features/entries/components/Entry";
import {
  FetchEntriesSlugsDocument,
  FetchEntriesSlugsQuery,
} from "features/entries/queries/FetchEntriesSlugs.generated";
import { FetchEntryQuery, FetchEntryDocument } from "features/entries/queries/FetchEntry.generated";
import { client } from "lib/apolloClient";

const ENTRY_TYPE = "blog";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const { data: blogEntry } = await client.query<FetchEntryQuery>({
    query: FetchEntryDocument,
    variables: {
      slug: params.slug,
    },
  });

  if (!blogEntry.entries?.data[0].attributes) {
    throw Error;
  }

  return <Entry entry={blogEntry.entries?.data[0].attributes} />;
}

export async function generateStaticParams() {
  const { data: slugs } = await client.query<FetchEntriesSlugsQuery>({
    query: FetchEntriesSlugsDocument,
    variables: {
      type: ENTRY_TYPE,
    },
  });


  return slugs.entries?.data.map(
    ({ attributes: entry }) =>
      entry && {
        type: ENTRY_TYPE,
        slug: entry.slug,
      },
  );
}
