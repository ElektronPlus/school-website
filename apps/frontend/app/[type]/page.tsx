import { Card } from "features/entries/components/Card";
import {
  FetchEntriesDocument,
  FetchEntriesQuery,
} from "features/entries/queries/FetchEntries.generated";
import { Enum_Entry_Type } from "features/entries/queries/FetchEntriesSlugs.generated";
import { ENTRIES_PER_PAGE } from "features/pagination/constants";
import { client } from "lib/apolloClient";
import dynamic from "next/dynamic";

const Pagination = dynamic(() => import("features/pagination/components/Pagination"), {
  loading: () => <p>...</p>,
});

interface PageProps {
  params: { slug: string; type: Enum_Entry_Type };
  searchParams?: { page?: string; };
}

export default async function Page({ params, searchParams }: PageProps) {
  const page = Number(searchParams?.page ?? 1);

  const { data } = await client.query<FetchEntriesQuery>({
    query: FetchEntriesDocument,
    variables: {
      page,
      pageSize: ENTRIES_PER_PAGE,
      type: params.type,
    },
  });

  const pageCount = data.entries?.meta.pagination.pageCount as number;

  return (
    <>
      <main>
        {data.entries?.data.map(
          ({ attributes: entry }) => entry && <Card key={entry.slug} entry={entry} />,
        )}
        <Pagination page={page} pageCount={pageCount} pathname={params.type} />
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(Enum_Entry_Type).map((type) => {
    return { type };
  });
}
