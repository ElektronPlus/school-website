import {
  FetchCollectionsDocument,
  FetchCollectionsQueryVariables,
} from "features/collections/queries/FetchCollections.generated";
import { client } from "lib/apollo";
import { FetchCollectionsQuery } from "src/types";
import { nonNullable } from "utils/utils";

export const fetchCollections = async () => {
  const { data: collectionsData } = await client.query<
    FetchCollectionsQuery,
    FetchCollectionsQueryVariables
  >({
    query: FetchCollectionsDocument,
  });

  const collections =
    collectionsData.collections?.data
      .map((collection) => collection.attributes)
      .filter(nonNullable) ?? [];
  const slugs = collections.map((collection) => collection.slug).filter(nonNullable);

  return {
    collections,
    slugs,
  };
};
