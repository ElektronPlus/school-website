import { FetchNewestEventDocument } from "features/events/queries/FetchNewestEvent.generated";
import { client } from "lib/apollo";
import { FetchNewestEventQuery, FetchNewestEventQueryVariables } from "src/types";

export const fetchEvents = async () => {
  const { data: eventData } = await client.query<
    FetchNewestEventQuery,
    FetchNewestEventQueryVariables
  >({
    query: FetchNewestEventDocument,
  });

  return {
    eventData,
  };
};
