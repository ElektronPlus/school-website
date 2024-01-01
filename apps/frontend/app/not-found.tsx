import { Meta } from "features/seo/components/DefaultMeta";
import { t } from "utils/translations";

export default async function NotFound() {
  return (
    <>
      <Meta title={t("notFound")} />
      <section aria-describedby="notFound">
        <h2 id="notFound">{t("notFound")}</h2>
      </section>
    </>
  );
}
