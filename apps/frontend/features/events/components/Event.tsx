import { Heading } from "components/Heading";
import { EventPagination } from "features/events/components/EventPagination";
import { EventFragment } from "features/events/fragments/Event.generated";
import { t } from "utils/translations";

interface EventProps {
  event: EventFragment;
}

export const Event = ({ event }: EventProps) => {
  return (
    <>
      <EventPagination date={event.date} />
      <article aria-describedby="date">
        <Heading id="date" as="h2">
          {t("events")} <time dateTime={event.date}>{event.date}</time>
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
