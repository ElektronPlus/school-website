import { Card } from "features/entries/components/Card";
import {
  FetchEntriesDocument,
  FetchEntriesQuery,
} from "features/entries/queries/FetchEntries.generated";
import { ENTRIES_PER_PAGE } from "features/pagination/constants";
import { client } from "lib/apolloClient";
import dynamic from "next/dynamic";

const Pagination = dynamic(() => import("features/pagination/components/Pagination"), {
  loading: () => <p>...</p>,
});

interface PageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Page({ searchParams }: PageProps) {
  const page = Number(searchParams?.page ?? 1);

  const { data: blogEntries } = await client.query<FetchEntriesQuery>({
    query: FetchEntriesDocument,
    variables: {
      page,
      pageSize: ENTRIES_PER_PAGE,
      type: "blog",
    },
  });

  const pageCount = blogEntries.entries?.meta.pagination.pageCount ?? 0;

  return (
    <>
      <main>
        {blogEntries.entries?.data.map(
          ({ attributes: entry }) => entry && <Card key={entry.slug} entry={entry} />
        )}
        <Pagination page={page} pageCount={pageCount} pathname="blog" />
      </main>
    </>
  );
}


export async function generateStaticParams() {
  return ["blog", "info"].map((type) => {
    return { type };
  })
}