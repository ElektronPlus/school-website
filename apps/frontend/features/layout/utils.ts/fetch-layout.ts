import {
  FetchLayoutDocument,
  FetchLayoutQuery,
  FetchLayoutQueryVariables,
} from "features/layout/queries/FetchLayout.generated";
import { client } from "lib/apollo";

export const fetchLayout = async () => {
  const { data: layout } = await client.query<FetchLayoutQuery, FetchLayoutQueryVariables>({
    query: FetchLayoutDocument,
  });

  return {
    layout,
  };
};
