import {
  FetchFooterDocument,
  FetchFooterQuery,
} from "features/navigation/queries/FetchFooter.generated";
import {
  FetchNavigationQuery,
  FetchNavigationDocument,
} from "features/navigation/queries/FetchNavigation.generated";
import { client } from "lib/apolloClient";
import Link from "next/link";
import { transformHtml } from "utils/content";

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
    <footer>
      {top && (
        <div
          dangerouslySetInnerHTML={{
            __html: transformHtml(top),
          }}
        />
      )}
      <nav>
        <ul>
          {navigation.renderNavigation.map(
            (item) =>
              item && (
                <li key={item.id}>
                  {item.path && item.path !== "/" ? (
                    <Link href={item.path}>{item.title}</Link>
                  ) : (
                    item.title
                  )}
                  <ul>
                    {item.items?.map((subitem) => (
                      <li key={subitem?.id}>
                        <Link href={subitem?.path ?? "#"}>{subitem?.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ),
          )}
        </ul>
        <p>
          Built by <Link href="https://jan.pizza">Jan Szymański</Link> &amp;&nbsp;
          <Link href="https://wybran.dev">Krystian Wybranowski</Link>
        </p>
        {bottom && (
          <div
            dangerouslySetInnerHTML={{
              __html: transformHtml(bottom),
            }}
          />
        )}
      </nav>
    </footer>
  );
};
