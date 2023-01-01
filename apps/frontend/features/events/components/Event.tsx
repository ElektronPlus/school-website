import { Heading } from "components/Heading";
import { EventFragment } from "features/events/fragments/Event.generated";
import dynamic from "next/dynamic";

interface EventProps {
  event: EventFragment;
}

const EventDatePicker = dynamic(() => import("features/events/components/EventDatePicker"), {
  loading: () => <p>...</p>,
});

export const Event = ({ event }: EventProps) => {
  return (
    <>
      <EventDatePicker />
      <article aria-describedby="date">
        <Heading id="date" as="h2">
          <time dateTime={event.date}>{event.date}</time>
        </Heading>
        <div
          dangerouslySetInnerHTML={{
            __html: event.content,
          }}
        />
      </article>
    </>
  );
};
