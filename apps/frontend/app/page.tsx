import { Heading } from "components/Heading";
import ellipsize from "ellipsize";
import { Card } from "features/entries/components/Card";
import { fetchEntries } from "features/entries/utils/fetch-entries";
import { Event } from "features/events/components/Event";
import { fetchEvents } from "features/events/utils/fetch-events";
import { Meta } from "features/seo/components/DefaultMeta";
import { MAXIMUM_META_DESCRIPTION_LENGTH } from "features/seo/constants";
import { fetchSeo } from "features/seo/utils/fetch-seo";
import Link from "next/link";
import { t } from "utils/translations";


export default async function Page() {
  const { entriesData } = await fetchEntries();
  const { seoData } = await fetchSeo();
  const { eventData } = await fetchEvents();

  const event = eventData.events?.data[0]?.attributes;

  const { description } = seoData.home?.data?.attributes?.SEO ?? {};

  return (
    <div className="page--index">
      <Meta
        {...(description && {
          description: ellipsize(description),
          MAXIMUM_META_DESCRIPTION_LENGTH,
        })}
      />
      {event && <Event event={event} />}
      <section className="cards" aria-describedby="whatsNew">
        <Heading id="whatsNew" as="h2" variant="2xl" className="section-heading">
          {t("whatsNew")}
        </Heading>
        <div className="entries-items">
          {entriesData.entries?.data.map(
            ({ attributes: entry }) => entry && <Card key={entry.slug} entry={entry} />,
          )}
        </div>
      </section>
      <Link href="blog" className="read_more">
        {t("seeMoreArticles")}
      </Link>
    </div>
  );
}
