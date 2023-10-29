import { Heading } from "components/Heading";
import { EventPagination } from "features/events/components/EventPagination";
import { EventFragment } from "features/events/fragments/Event.generated";
import { templateConfig } from "site.config";
import { t } from "utils/translations";

interface EventProps {
  event: EventFragment;
}

export const Event = ({ event }: EventProps) => {
  const date = new Date(event.date);

  return (
    <div className="event">
      <article aria-describedby="date" className="wrapper">
        <Heading id="date" as="h2" variant="2xl" className="date">
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
          className="content"
          dangerouslySetInnerHTML={{
            __html: event.content,
          }}>
        </div>
        <EventPagination date={event.date} />
      </article>
    </div>
  );
};
