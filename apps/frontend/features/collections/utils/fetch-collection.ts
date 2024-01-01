
import { FetchCollectionQuery, FetchCollectionQueryVariables, FetchCollectionDocument } from "features/collections/queries/FetchCollection.generated";
import { client } from "lib/apollo";


export const fetchCollection = async (slug: string) => {
  const { data: collectionData, error } = await client.query<FetchCollectionQuery, FetchCollectionQueryVariables>({
    query: FetchCollectionDocument,
    variables: {
      slug,
    }
  });

  const collection = collectionData.collections?.data[0];

  console.log(collectionData, error)


  return {
    collection,
  };
};