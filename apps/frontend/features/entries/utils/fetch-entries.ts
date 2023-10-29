import { FetchEntriesDocument } from "features/entries/queries/FetchEntries.generated";
import { ENTRIES_PER_PAGE } from "features/pagination/constants";
import { client } from "lib/apollo";
import { Enum_Entry_Type, FetchEntriesQuery, FetchEntriesQueryVariables } from "src/types";

export const fetchEntries = async () => {
  const { data: entriesData } = await client.query<FetchEntriesQuery, FetchEntriesQueryVariables>({
    query: FetchEntriesDocument,
    variables: {
      page: 1,
      pageSize: ENTRIES_PER_PAGE,
      type: Enum_Entry_Type.Blog,
    },
  });

  return {
    entriesData
  }
}