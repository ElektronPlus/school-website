import { FetchFooterQuery, FetchFooterDocument } from "features/layout/queries/FetchFooter.generated";
import { client } from "lib/apollo";

export const fetchFooter = async () => {
  const { data: footer } = await client.query<FetchFooterQuery>({
    query: FetchFooterDocument,
  });


  return {
    footer,
  };
};
