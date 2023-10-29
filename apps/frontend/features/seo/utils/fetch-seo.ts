import { FetchHomeSeoDocument } from "features/seo/queries/FetchHomeSeo.generated";
import { client } from "lib/apollo";
import { FetchHomeSeoQuery, FetchHomeSeoQueryVariables } from "src/types";

export const fetchSeo = async () => {
  const { data: seoData } = await client.query<FetchHomeSeoQuery, FetchHomeSeoQueryVariables>({
    query: FetchHomeSeoDocument,
  });
  

  return { seoData };
};
