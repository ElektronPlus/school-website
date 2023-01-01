import { Event } from "features/events/components/Event";
import {
  FetchNewestEventDocument,
  FetchNewestEventQuery,
} from "features/events/queries/FetchNewestEvent.generated";
import { Meta } from "features/seo/components/DefaultMeta";
import { client } from "lib/apolloClient";
import { notFound } from "next/navigation";

export default async function Page() {
  const { data } = await client.query<FetchNewestEventQuery>({
    query: FetchNewestEventDocument,
  });

  const event = data.events?.data[0]?.attributes;

  if (!event) {
    notFound();
  }

  return (
    <>
      <Meta title={event.date} description={event.content} />
      <main>
        <Event event={event} />
      </main>
    </>
  );
}
