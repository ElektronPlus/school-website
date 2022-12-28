import { FetchAlertDocument, FetchAlertQuery } from "features/alert/queries/FetchAlert.generated";
import { client } from "lib/apolloClient";
import Link from "next/link";

export const Alert = async () => {
  const { data } = await client.query<FetchAlertQuery>({
    query: FetchAlertDocument,
  });

  const { content, link, isEnabled } = data.alert?.data?.attributes ?? {};

  if (!isEnabled) {
    return null;
  }

  return (
    <div>
      {link ? <Link href={link}>{content}</Link> : content}
    </div>
  );
};
