import { Heading } from "components/Heading";
import {
  FetchFooterDocument,
  FetchFooterQuery,
} from "features/layout/queries/FetchFooter.generated";
import {
  FetchNavigationQuery,
  FetchNavigationDocument,
} from "features/layout/queries/FetchNavigation.generated";
import { Socials } from "features/socials/components/Socials";
import { client } from "lib/apolloClient";
import Link from "next/link";
import { transformHtml } from "utils/content";
import { t } from "utils/translations";

export const Footer = async () => {
  const { data: navigation } = await client.query<FetchNavigationQuery>({
    query: FetchNavigationDocument,
    variables: {
      slug: "footer",
    },
  });

  const { data: content } = await client.query<FetchFooterQuery>({
    query: FetchFooterDocument,
  });

  const { top, bottom } = content.footer?.data?.attributes ?? {};

  return (
    <footer className="footer">
      <section aria-describedby="contact" className="contact">
        <Heading as="h2" id="contact" className="sr-only">
          {t("contact")}
        </Heading>
        {top && (
          <div
            className="top"
            dangerouslySetInnerHTML={{
              __html: transformHtml(top),
            }}
          />
        )}
      </section>
      {/* @ts-expect-error Server Component */}
      <Socials />
      <nav aria-describedby="usefulLinks">
        <Heading as="h2" id="usefulLinks" className="sr-only">
          {t("usefulLinks")}
        </Heading>
        <ul className="items">
          {navigation.renderNavigation.map(
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
          )}
        </ul>
      </nav>
      <section aria-describedby="siteCreators" className="site_creators">
        <Heading as="h2" id="siteCreators" className="sr-only">
          {t("siteCreators")}
        </Heading>
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
