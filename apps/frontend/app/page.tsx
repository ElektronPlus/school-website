import { Card } from "features/entries/components/Card";
import { FetchEntriesDocument } from "features/entries/queries/FetchEntries.generated";
import { ENTRIES_PER_PAGE } from "features/pagination/constants";
import { Enum_Entry_Type } from "fragments/Image.generated";
import { client } from "lib/apolloClient";
import Link from "next/link";
import { FetchEntriesQuery } from "src/types";


export default async function Page() {
  const { data } = await client.query<FetchEntriesQuery>({
    query: FetchEntriesDocument,
    variables: {
      page: 1,
      pageSize: ENTRIES_PER_PAGE,
      type: Enum_Entry_Type.Blog,
    },
  });

  return (
    <>
      <main>
        {data.entries?.data.map(
          ({ attributes: entry }) => entry && <Card key={entry.slug} entry={entry} />,
        )}
        <Link href="#">Zobacz więcej</Link>
      </main>
    </>
  );
}
