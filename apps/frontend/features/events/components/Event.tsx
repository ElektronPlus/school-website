import { Heading } from "components/Heading";
import { templateConfig } from "config.template";
import { EventPagination } from "features/events/components/EventPagination";
import { EventFragment } from "features/events/fragments/Event.generated";
import { t } from "utils/translations";

interface EventProps {
  event: EventFragment;
}

export const Event = ({ event }: EventProps) => {
  const date = new Date(event.date);

  return (
    <>
      <EventPagination date={event.date} />
      <article aria-describedby="date">
        <Heading id="date" as="h2">
          {t("events")} &ndash;{" "}
          <time dateTime={event.date}>
            {date.toLocaleDateString(templateConfig.lang, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
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
