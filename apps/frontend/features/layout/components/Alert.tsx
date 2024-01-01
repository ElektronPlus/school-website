import { FetchAlertDocument, FetchAlertQuery } from "features/layout/queries/FetchAlert.generated";
import { client } from "lib/apollo";
import Link from "next/link";
import { t } from "utils/translations";

export const Alert = async () => {
  const { data } = await client.query<FetchAlertQuery>({
    query: FetchAlertDocument,
  });

  const { content, link, isEnabled } = data.alert?.data?.attributes ?? {};

  if (!isEnabled) {
    return null;
  }

  return (
    <section aria-describedby="announcement" className="alert">
      <h2 id="announcement" className="sr-only">
        {t("announcement")}
      </h2>
      <p className="content">{link ? <Link href={link}>{content}</Link> : content}</p>
    </section>
  );
};