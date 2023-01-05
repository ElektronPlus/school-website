import { Event } from "features/events/components/Event";
import { FetchEventQuery } from "features/events/queries/FetchEvent.generated";
import { FetchEventDocument } from "features/events/queries/FetchEvent.generated";
import {
  FetchEventsDatesQuery,
  FetchEventsDatesDocument,
} from "features/events/queries/FetchEventsDates.generated";
import { Meta } from "features/seo/components/DefaultMeta";
import { client } from "lib/apolloClient";
import { notFound } from "next/navigation";

interface PageProps {
  params: { date: string };
}

export default async function Page({ params }: PageProps) {
  const { data } = await client.query<FetchEventQuery>({
    query: FetchEventDocument,
    variables: {
      date: params.date,
    },
  });

  const event = data.events?.data[0]?.attributes;

  if (!event) {
    notFound();
  }

  return (
    <>
      <Meta title={event.date} description={event.content} />
      <Event event={event} />
    </>
  );
}

export async function generateStaticParams() {
  const { data } = await client.query<FetchEventsDatesQuery>({
    query: FetchEventsDatesDocument,
  });

  return data.events?.data.map(({ attributes: event }) => ({
    ...event,
  }));
}
