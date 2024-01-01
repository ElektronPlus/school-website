import { fetchFooter } from "features/layout/utils.ts/fetch-footer";
import { Socials } from "features/socials/components/Socials";
import Link from "next/link";
import { transformHtml } from "utils/content";
import { t } from "utils/translations";

export const Footer = async () => {
  const { footer } = await fetchFooter();
  
  const { top, bottom } = footer.footer?.data?.attributes ?? {};

  return (
    <footer className="footer">
      <section aria-describedby="contact" className="contact">
        <h2 id="sr-only">{t("contact")}</h2>
        {top && (
          <div
            className="top"
            dangerouslySetInnerHTML={{
              __html: transformHtml(top),
            }}
          />
        )}
      </section>
      <Socials />
      <nav aria-describedby="usefulLinks">
        <h2 id="usefulLinks" className="sr-only">
          {t("usefulLinks")}
        </h2>
        <ul className="items">
          {/* {navigation.renderNavigation.map(
            (item) =>
              item && (
                <li key={item.id} className="item">
                  {item.path && item.path !== "/" ? (
                    <Link href={item.path}>{item.title}</Link>
                  ) : (
                    <Heading as="h3">{item.title}</Heading>
                  )}
                  <ul className="subitems">
                    {item.items?.map((subitem) => (
                      <li key={subitem?.id} className="subitem">
                        <Link href={subitem?.path ?? "#"}>{subitem?.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ),
          )} */}
        </ul>
      </nav>
      <section aria-describedby="siteCreators" className="site_creators">
        <h2 id="siteCreators" className="sr-only">
          {t("siteCreators")}
        </h2>
        <p className="content">
          {t("builtBy")} <Link href="https://jan.pizza">Jan Szymański</Link> &amp;&nbsp;
          <Link href="https://wybran.dev">Krystian Wybranowski</Link>
        </p>
      </section>
      <section className="bottom">
        {bottom && (
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: transformHtml(bottom),
            }}
          />
        )}
      </section>
    </footer>
  );
};
