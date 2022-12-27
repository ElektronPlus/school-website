import { Card } from "features/entries/components/Card";
import { FetchBlogEntriesDocument } from "features/entries/queries/FetchBlogEntries.generated";
import { client } from "lib/apolloClient";
import { FetchBlogEntriesQuery } from "src/types";
import dynamic from "next/dynamic";
import { ENTRIES_PER_PAGE } from "features/pagination/constants";

const Pagination = dynamic(() => import("features/pagination/components/Pagination"), {
  loading: () => <p>...</p>,
});

interface PageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Page({ searchParams }: PageProps) {
  const page = Number(searchParams?.page ?? 1);

  const { data: blogEntries } = await client.query<FetchBlogEntriesQuery>({
    query: FetchBlogEntriesDocument,
    variables: {
      page,
      pageSize: ENTRIES_PER_PAGE,
    },
  });

  const pageCount = blogEntries.entries?.meta.pagination.pageCount ?? 0;

  return (
    <>
      <main>
        {blogEntries.entries?.data.map(
          ({ attributes: entry }) => entry && <Card key={entry.slug} entry={entry} />,
        )}
        <Pagination page={page} pageCount={pageCount} pathname="blog" />
      </main>
    </>
  );
}
