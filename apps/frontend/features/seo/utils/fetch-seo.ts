import { FetchHomeSeoQuery, FetchHomeSeoQueryVariables, FetchHomeSeoDocument } from "features/seo/queries/FetchHomeSeo.generated";
import { client } from "lib/apollo";

export const fetchSeo = async () => {
  const { data: seoData } = await client.query<FetchHomeSeoQuery, FetchHomeSeoQueryVariables>({
    query: FetchHomeSeoDocument,
  });
  

  return { seoData };
};
