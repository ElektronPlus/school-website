import { Heading } from "components/Heading";
import { Meta } from "features/seo/components/DefaultMeta";
import { t } from "utils/translations";

export default async function NotFound() {
  return (
    <>
      <Meta title={t("notFound")} />
      <main aria-describedby="notFound">
        <Heading as="h2" id="notFound">{t("notFound")}</Heading>
      </main>
    </>
  );
}
