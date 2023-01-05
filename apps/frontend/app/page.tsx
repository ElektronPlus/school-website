import ellipsize from "ellipsize";
import { Card } from "features/entries/components/Card";
import { FetchEntriesDocument } from "features/entries/queries/FetchEntries.generated";
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
import { FetchEntriesQuery } from "src/types";
import { t } from "utils/translations";

export default async function Page() {
  const { data } = await client.query<FetchEntriesQuery>({
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

  const { description } = seoData.home?.data?.attributes?.SEO ?? {};

  return (
    <>
      <Meta
        {...(description && {
          description: ellipsize(description),
          MAXIMUM_META_DESCRIPTION_LENGTH,
        })}
      />
      {data.entries?.data.map(
        ({ attributes: entry }) => entry && <Card key={entry.slug} entry={entry} />,
      )}
      <Link href="blog">{t("seeMore")}</Link>
    </>
  );
}
