import ellipsize from "ellipsize";
import { Card } from "features/entries/components/Card";
import { FetchEntriesDocument } from "features/entries/queries/FetchEntries.generated";
import { Event } from "features/events/components/Event";
import { FetchNewestEventDocument } from "features/events/queries/FetchNewestEvent.generated";
import { ENTRIES_PER_PAGE } from "features/pagination/constants";
import { Meta } from "features/seo/components/DefaultMeta";
import { MAXIMUM_META_DESCRIPTION_LENGTH } from "features/seo/constants";
import {
  FetchHomeSeoQuery,
  FetchHomeSeoDocument,
} from "features/seo/queries/FetchHomeSeo.generated";
import { Enum_Entry_Type } from "fragments/Image.generated";
import { client } from "lib/apolloClient";
import Link from "next/link";
import { FetchEntriesQuery, FetchNewestEventQuery } from "src/types";
import { t } from "utils/translations";

export default async function Page() {
  const { data: entriesData } = await client.query<FetchEntriesQuery>({
    query: FetchEntriesDocument,
    variables: {
      page: 1,
      pageSize: ENTRIES_PER_PAGE,
      type: Enum_Entry_Type.Blog,
    },
  });

  const { data: seoData } = await client.query<FetchHomeSeoQuery>({
    query: FetchHomeSeoDocument,
    variables: {
      page: 1,
      pageSize: ENTRIES_PER_PAGE,
      type: Enum_Entry_Type.Blog,
    },
  });

  const { data: eventData } = await client.query<FetchNewestEventQuery>({
    query: FetchNewestEventDocument,
  });

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
      <section className="cards">
        {entriesData.entries?.data.map(
          ({ attributes: entry }) => entry && <Card key={entry.slug} entry={entry} />,
        )}
      </section>
      <Link href="blog" className="read_more">
        {t("seeMoreArticles")}
      </Link>
      {event && <Event event={event} />}
    </div>
  );
}
